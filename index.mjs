import Vue from 'https://unpkg.com/vue@2.6.12/dist/vue.esm.browser.min.js'
const config = JSON.parse(window.document.querySelector('script[  type="application/ld+json"]').innerHTML.replace(/\"@/g, '"'))

const getTemplateContents = el => [el.content.firstElementChild].reduce((string, child) => {
	const divEl = window.document.createElement('div')
	divEl.append(child)
	return `${string} ${divEl.innerHTML}`
}, '').trim()

;(async () => {
	await Promise.all([...window.document.querySelectorAll('script[type="text/html"]')].map(async componentScriptEl => {
		const html = await fetch(componentScriptEl.getAttribute('src')).then(async res => await res.text())
		const divEl = window.document.createElement('div')
		divEl.innerHTML = html
		const componentEl = divEl.firstElementChild
		Vue.component(`Type${componentEl.getAttribute('data-type')}`,
		{
			inheritAttrs: false,
			props: componentEl.getAttribute('data-props').split(','),
			template: getTemplateContents(componentEl)
		})
	}))

	const el = window.document.querySelector('template[data-app]')
	const template = getTemplateContents(el)

	new Vue({
		el,
		data: () => ({
			config: {
				...config
			}
		}),
		template
	})
})()