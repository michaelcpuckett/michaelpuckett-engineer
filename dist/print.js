const detailsElements = Array.from(window.document.querySelectorAll('details'));
const printMediaQuery = window.matchMedia('print');

if (printMediaQuery.matches) {
  detailsElements.forEach((detailsElement) => {
    if (detailsElement.hasAttribute('open')) {
      detailsElement.setAttribute('data-open', '');
    } else {
      detailsElement.setAttribute('open', '');
    }
  });
}

printMediaQuery.addEventListener(({matches}) => {
  if (matches) {
    detailsElements.forEach((detailsElement) => {
      if (detailsElement.hasAttribute('open')) {
        detailsElement.setAttribute('data-open', '');
      } else {
        detailsElement.setAttribute('open', '');
      }
    });
  } else {
    detailsElements.forEach((detailsElement) => {
      if (detailsElement.hasAttribute('data-open')) {
        detailsElement.removeAttribute('data-open');
      } else {
        detailsElement.removeAttribute('open');
      }
    });
  }
});