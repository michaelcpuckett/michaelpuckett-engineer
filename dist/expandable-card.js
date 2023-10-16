import {LitElement, html, createRef, nothing, ref} from './lit.all.min.js';

const cardStyles = new CSSStyleSheet();
cardStyles.replaceSync(`
  :host {
    display: block;
    margin: 1em 0;
  }
  details {
    cursor: pointer;
    border-radius: 1em;
    padding: 1.5em;
    box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.25);
    background-color: #f0f0f0;
    background-color: var(--swatch-button-face);
  }
  summary {
    font-weight: 700;
    color: LinkText;
    color: var(--swatch-interactive);
  }
  summary ::slotted(span) {
    color: CanvasText;
    color: var(--swatch-text-color);
  }
  summary:focus {
    outline: 0;
  }
  details:hover {
    box-shadow: 0 0 1px 4px var(--swatch-focused);
  }
  details:focus-within {
    outline: 4px solid Highlight;
    outline: 4px solid var(--swatch-focused);
  }
  [role="list"] {
    display: flex;
  }
  [role="term"] {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }
  [role="definition"] {
    padding: 0;
    margin: 0;
    font-size: 0.875em;
  }
  [role="definition"]:not(:last-of-type):after {
    content: "–\\00a0";
  }
`);

class ExperienceCard extends LitElement {
  static styles = [cardStyles];
  static properties = {
    isShowingStartDate: {type: Boolean, default: true},
    isShowingEndDate: {type: Boolean, default: true},
  };

  summaryElement = createRef();

  startDateSlotElement = createRef();

  endDateSlotElement = createRef();

  toggle(event) {
    const isSummaryTarget = !!event.composedPath().find((element) => {
      return element === this.summaryElement.value;
    });

    if (isSummaryTarget) {
      return;
    }

    this.summaryElement.value?.click();
  }

  constructor() {
    super();
    this.isShowingStartDate = true;
    this.isShowingEndDate = true;
  }

  firstUpdated() {
    this.isShowingStartDate = !!this.startDateSlotElement.value?.assignedNodes().length;
    this.isShowingEndDate = !!this.endDateSlotElement.value?.assignedNodes().length;
  }

  render() {
    return html`
      <details @click=${this.toggle}>
        <summary ${ref(this.summaryElement)}>
          <slot name="summary"></slot>
        </summary>
        <div>
          <div role="list">
            ${this.isShowingStartDate ? html`
              <span role="term">Start Date</span>
              <span role="definition"><slot ${ref(this.startDateSlotElement)} name="start-date"></slot></span>
            ` : nothing}
            ${this.isShowingEndDate ? html`
              <span role="term">End Date</span>
              <span role="definition"><slot ${ref(this.endDateSlotElement)} name="end-date"></slot></span>
            ` : nothing}
          </div>
          <slot></slot>
        </div>
      </details>
    `;
  }
}

window.customElements.define('expandable-card', ExperienceCard);