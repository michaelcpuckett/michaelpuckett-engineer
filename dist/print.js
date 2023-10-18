const detailsElements = Array.from(window.document.querySelectorAll('details'));

window.addEventListener('beforeprint', () => {
  detailsElements.forEach((detailsElement) => {
    if (detailsElement.hasAttribute('open')) {
      detailsElement.setAttribute('data-open', '');
    } else {
      detailsElement.setAttribute('open', '');
    }
  });
});

window.addEventListener('afterprint', () => {
  detailsElements.forEach((detailsElement) => {
    if (detailsElement.hasAttribute('data-open')) {
      detailsElement.removeAttribute('data-open');
    } else {
      detailsElement.removeAttribute('open');
    }
  });
});