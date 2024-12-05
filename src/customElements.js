const markerStyleSheet = new CSSStyleSheet();
markerStyleSheet.replaceSync(`:host::before { content: var(--marker); }`);

class MarkerHtmlElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(markerStyleSheet);
  }
}

const listMarkerStyleSheet = new CSSStyleSheet();
listMarkerStyleSheet.replaceSync(`:host { --marker: "•"; }`);

class ListMarkerHtmlElement extends MarkerHtmlElement {
  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets.push(listMarkerStyleSheet);
  }
}

window.customElements.define("list-marker", ListMarkerHtmlElement);

const sectionMarkerStyleSheet = new CSSStyleSheet();
sectionMarkerStyleSheet.replaceSync(`:host { --marker: "#"; }`);

class SectionMarkerHtmlElement extends MarkerHtmlElement {
  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets.push(sectionMarkerStyleSheet);
  }
}

window.customElements.define("section-marker", SectionMarkerHtmlElement);
