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

const registerComponents = async () => {
  const componentScriptEls = queryAll('script[data-component]')

  return await Promise.all(componentScriptEls.map(async scriptEl => {
    const templateEl = await fetchTemplateFromScript(scriptEl)
    const template = getTemplateContents(templateEl)
    const props = templateEl.getAttribute('data-props').split(',')
    const type = templateEl.getAttribute('data-type')
    const name = `Type${type}`
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

const renderHead = async data => {
  const el = createElement('div')
  window.document.body.append(el)
  
  new Vue({
    el,
  	data: () => ({
  		config: {
  			...data
  		}
  	}), 
    template: await getHeadTemplate(),
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

const getAppTemplate = async () => {
  const el = queryFor('script[data-app]')
  const template = await fetchTemplateFromScript(el)
    .then(getTemplateContents)
  el.remove()
  return template
}

const renderApp = async data => {
  const el = createElement('div')
  window.document.body.append(el)

  return new Vue({
    	el,
    	data: () => ({
    		config: {
    			...data
    		}
    	}),
      template: await getAppTemplate()
    })
}

domContentLoadedPromise.then(async () => {
  const dataEl = queryFor('[type="application/ld+json"]')
  const appData = JSON.parse(dataEl.innerHTML.replace(/\"@/g, '"'))

  await Promise.all([
    registerComponents(),
    renderApp(appData)
  ])
  
  await renderHead(appData)

  const stylesheetEl = queryFor('link[rel="stylesheet"]')
  const style = await fetchTextContent(stylesheetEl.getAttribute('href'))
  const styleEl = createElement('style')
  styleEl.innerHTML = style
  stylesheetEl.parentElement.replaceChild(styleEl, stylesheetEl)

  queryFor('script[type="module"]').remove()
  console.log(`
    <!doctype html>
    <html lang="en">
      ${window.document.documentElement.innerHTML}
    </html>
  `)
})
