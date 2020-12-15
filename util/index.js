export const domContentLoadedPromise = new Promise(resolve => {
  if (window.document.readyState !== 'loading') {
    resolve()
  } else {
    window.document.addEventListener('readystatechange', () => {
      if (window.document.readyState !== 'loading') {
        resolve()
      }
    })
   }
})

export const createElement = tagName =>
  window.document.createElement(tagName)

export const queryFor = selector =>
  window.document.querySelector(selector)

export const queryAll = selector => [
  ...window.document.querySelectorAll(selector)
]

export const getTemplateContents = templateEl => {
  const firstElementChild = templateEl.content.firstElementChild
  const divEl = createElement('div')
  divEl.append(firstElementChild)
  return divEl.innerHTML
}

export const fetchTextContent = async url =>
  await fetch(url).then(async res => await res.text())

export const fetchTemplateFromScript = async scriptEl => {
  const html = await fetchTextContent(scriptEl.getAttribute('src'))
  const divEl = createElement('div')
  divEl.innerHTML = html
  return divEl.firstElementChild
}
