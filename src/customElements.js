class AriaHiddenHtmlElement extends HTMLElement {
  connectedCallback() {
    this.ariaHidden = true;
  }
}

const listMarkerStyleSheet = new CSSStyleSheet();
listMarkerStyleSheet.replaceSync(`:host::before { content: "•"; }`);

class ListMarkerHtmlElement extends AriaHiddenHtmlElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).adoptedStyleSheets.push(
      listMarkerStyleSheet
    );
  }
}

window.customElements.define("list-marker", ListMarkerHtmlElement);

const sectionMarkerStyleSheet = new CSSStyleSheet();
sectionMarkerStyleSheet.replaceSync(`:host::before { content: "#"; }`);

class SectionMarkerHtmlElement extends AriaHiddenHtmlElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).adoptedStyleSheets.push(
      sectionMarkerStyleSheet
    );
  }
}

window.customElements.define("section-marker", SectionMarkerHtmlElement);

class AbstractListItemHtmlElement extends HTMLElement {
  connectedCallback() {
    this.role = "listitem";
  }
}

class ListItemHtmlElement extends AbstractListItemHtmlElement {
  connectedCallback() {
    super.connectedCallback();
    this.prepend(window.document.createElement("list-marker"));
  }
}

window.customElements.define("list-item", ListItemHtmlElement);

class CardItemHtmlElement extends AbstractListItemHtmlElement {}

window.customElements.define("card-item", CardItemHtmlElement);

class AbstractListHtmlElement extends HTMLElement {
  connectedCallback() {
    this.role = "list";
  }
}

class UnorderedListHtmlElement extends AbstractListHtmlElement {}
window.customElements.define("unordered-list", UnorderedListHtmlElement);

class CardListHtmlElement extends AbstractListHtmlElement {}
window.customElements.define("card-list", CardListHtmlElement);
