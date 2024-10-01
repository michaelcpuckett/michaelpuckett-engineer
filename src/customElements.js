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

const listItemStyleSheet = new CSSStyleSheet();
listItemStyleSheet.replaceSync(`
  :host {
    font-size: 0.875rem;
    line-height: 0.875rlh;
    display: grid;
    grid-template-columns: auto minmax(0px, 1fr);
    column-gap: 0.5rlh;
  }
`);

class ListItemHtmlElement extends AbstractListItemHtmlElement {
  connectedCallback() {
    super.connectedCallback();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.adoptedStyleSheets.push(listItemStyleSheet);
    shadowRoot.append(window.document.createElement("list-marker"));
    shadowRoot.append(window.document.createElement("slot"));
  }
}

window.customElements.define("list-item", ListItemHtmlElement);

const cardItemStyleSheet = new CSSStyleSheet();
cardItemStyleSheet.replaceSync(`
  :host {
    display: grid;
    font-size: 0.875rem;
    line-height: 0.875rlh;
    margin: 0;
    padding: 1rlh;
    border: 2px solid var(--swatch-page);
    border-radius: 1rlh;
    background-color: var(--swatch-button-face);
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
    list-style: none;

    @media screen and (max-width: 320px) {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      background: none;
      box-shadow: none;
      border-bottom: 0.1rem solid var(--swatch-text);
      border-radius: 0;
    }

    @media print, screen and (forced-colors: active) {
      page-break-inside: avoid;
      padding: 1rlh 0 2rlh;
      border: 0 0 0.1rem solid var(--swatch-text);
      border-radius: 0;
      box-shadow: none;
    }

    & article {
      display: grid;
      gap: 0.5rlh;
    }
  }
`);

class CardItemHtmlElement extends AbstractListItemHtmlElement {
  connectedCallback() {
    super.connectedCallback();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.adoptedStyleSheets.push(cardItemStyleSheet);
    const articleElement = window.document.createElement("article");
    articleElement.append(window.document.createElement("slot"));
    shadowRoot.append(articleElement);
  }
}

window.customElements.define("card-item", CardItemHtmlElement);

class AbstractListHtmlElement extends HTMLElement {
  connectedCallback() {
    this.role = "list";
  }
}

const unorderedListStyleSheet = new CSSStyleSheet();
unorderedListStyleSheet.replaceSync(`
  :host {
    list-style: disc;
    padding: 0;
    margin: 0;
    display: grid;
    row-gap: 0.5rlh;
    padding-left: 0.25rlh;
  }
`);

class UnorderedListHtmlElement extends AbstractListHtmlElement {
  connectedCallback() {
    super.connectedCallback();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.adoptedStyleSheets.push(unorderedListStyleSheet);
    shadowRoot.append(window.document.createElement("slot"));
  }
}
window.customElements.define("unordered-list", UnorderedListHtmlElement);

class CardListHtmlElement extends AbstractListHtmlElement {}
window.customElements.define("card-list", CardListHtmlElement);
