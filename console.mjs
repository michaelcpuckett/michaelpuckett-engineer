const el = window.document.createElement('textarea')
el.setAttribute('cols', '250')
el.setAttribute('rows', '30')
window.document.body.append(el)

export default {
	log: value => {
		el.value = value
	}
}