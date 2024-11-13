const markerStyleSheet = new CSSStyleSheet();
markerStyleSheet.replaceSync(`:host::before { content: var(--marker); }`);

class MarkerHtmlElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(markerStyleSheet);
  }

  connectedCallback() {
    this.ariaHidden = true;
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
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(listItemStyleSheet);
    this.shadowRoot.append(window.document.createElement("list-marker"));
    this.shadowRoot.append(window.document.createElement("slot"));
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
    padding: var(--gap);
    border: 2px solid var(--swatch--page);

    @media (prefers-color-scheme: dark) {
      box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.25);
    }

    border-radius: 1rlh;
    background-color: var(--swatch--button-face);
    list-style: none;

    @media screen and (max-width: 319px) {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      background: none;
      box-shadow: none;
      border-bottom: 0.1rem solid var(--swatch--text);
      border-radius: 0;
    }

    @media print, screen and (forced-colors: active) {
      padding: 1rlh 0 2rlh;
      border: 0 0 0.1rem solid var(--swatch--text);
      border-radius: 0;
      box-shadow: none;
    }
  }

  article {
    display: grid;
    gap: 0.5rlh;
  }
`);

class CardItemHtmlElement extends AbstractListItemHtmlElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets.push(cardItemStyleSheet);
    const articleElement = window.document.createElement("article");
    articleElement.append(window.document.createElement("slot"));
    this.shadowRoot.append(articleElement);
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
  }
`);

class UnorderedListHtmlElement extends AbstractListHtmlElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.adoptedStyleSheets.push(unorderedListStyleSheet);
    shadowRoot.append(window.document.createElement("slot"));
  }
}

window.customElements.define("unordered-list", UnorderedListHtmlElement);

class CardListHtmlElement extends AbstractListHtmlElement {}

window.customElements.define("card-list", CardListHtmlElement);
