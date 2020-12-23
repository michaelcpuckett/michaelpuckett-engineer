import Vue from 'https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.min.js'
import {
  createElement,
  queryFor,
  queryAll,
  getTemplateContents,
  fetchTextContent,
  fetchTemplateFromScript,
  domContentLoadedPromise
} from './util/index.js'

const getConfig = async () => {
  const scriptEl = queryFor('script[data-config]')
	const src = scriptEl.getAttribute('src')
	const itemSrc = scriptEl.getAttribute('data-item-src')
	scriptEl.remove()
  const items = await fetch(src)
		.then(res => res.json())
		.then(items => items.slice(0, 15))
		.then(async items =>
			await Promise.all(items.map(async id =>
				await fetch(itemSrc.replace('{id}', id))
					.then(data => data.json())
				)
			)
		)
	return {
		type: 'ItemList',
		itemListElement: await Promise.all(items.map(async item => ({
			type: 'ListItem',
			item: {
				type: 'DiscussionForumPosting',
				sharedContent: {
					type: 'CreativeWork',
					name: item.title,
					url: item.url,
					identifier: item.id,
					author: {
						type: 'Person',
						name: item.by
					}
				},
				interactionStatistic: {
					type: 'InteractionCounter',
					interactionType: 'CommentAction',
					userInteractionCount: item.descendants
				},
				comment: await Promise.all((item.kids || []).map(async (kid, i) => ({
					type: 'Comment',
					identifier: kid,
					...i === 0 ? await fetch(itemSrc.replace('{id}', kid))
						.then(data => data.json()) : null
				})))
			}
		})))
	}
}

const registerComponents = async () => {
  const componentScriptEls = queryAll('script[data-component]')

  return await Promise.all(componentScriptEls.map(async scriptEl => {
    const templateEl = await fetchTemplateFromScript(scriptEl)
    const template = getTemplateContents(templateEl)
    const props = templateEl.getAttribute('data-props')
      .split(',')
      .map(string => string.trim())
    const name = templateEl.getAttribute('data-name')
    Vue.component(name, {
      inheritAttrs: false,
      props,
      template
    })
    scriptEl.remove()
  }))
}

const getHeadTemplate = async () => {
  const el = queryFor('script[data-head]')
  const template = await fetchTemplateFromScript(el)
    .then(getTemplateContents)
  el.remove()
  return template
}

const renderHead = async config => {
  const template = await getHeadTemplate()
  const el = createElement('div')
  window.document.body.prepend(el)
  
  new Vue({
    el,
  	data: () => ({
  		config: {
  			...config
  		}
  	}), 
    template,
    mounted() {
      ;[...this.$el.children].forEach(el => {
        window.document.head.append(el)
      })
      this.$destroy()
    },
    beforeDestroy() {
      this.$el.remove()
    }
  })
}

const getBodyTemplate = async () => {
  const el = queryFor('script[data-body]')
  const template = await fetchTemplateFromScript(el)
    .then(getTemplateContents)
  el.remove()
  return template
}

const renderBody = async config => {
  const template = await getBodyTemplate()
  const el = createElement('div')
  window.document.body.prepend(el)

  return new Vue({
    el,
    data: () => ({
      config: {
        ...config
      }
    }),
    template
  })
}

const render = async config => {
	await registerComponents()
	console.log(config)
  await Promise.all([
    renderBody(config),
    renderHead(config)
  ])
  return config
}

domContentLoadedPromise
  .then(getConfig)
  .then(render)
