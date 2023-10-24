import {LitElement, html, createRef, nothing, ref} from './lit.all.min.js';

const cardStyles = new CSSStyleSheet();
cardStyles.replaceSync(`
  * {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  :focus {
    outline: 0;
  }
  :host {
    margin: 1em 0;
    border-radius: 1em;
    padding: 1.5em;
    display: block;
    box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.25);
    background-color: var(--swatch-button-face);
  }
  @media print, screen and (prefers-contrast: more), screen and (forced-colors: active) {
    :host {
      padding: 1em 0 2em;
      border-radius: 0;
      box-shadow: none;
      border-bottom: 1px solid var(--swatch-text-color);
    }
  }
  h3 {
    font-size: inherit;
    font-weight: 700;
    display: flex;
    gap: 8px;
    margin: 0;
    page-break-after: avoid;
  }
  summary ::slotted(span) {
    color: var(--swatch-text-color);
  }
  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    width: 1px;
  }
  .dates {
    padding: 0;
    margin: 0;
    font-size: 0.875em;
  }
`);

/**
 * @element region-card
 * 
 * @slot summary - The summary of the region.
 * @slot start-date - The start date of the region.
 * @slot end-date - The end date of the region.
 * 
 * @cssprop --swatch-button-face - The background color of the card.
 * @cssprop --swatch-text-color - The text color of the card.
 * 
 * @description
 * A card that displays as a region in a document, meaning it is a container for
 * related content. The slot summary is the heading of the region.
 */
class RegionCard extends LitElement {
  static styles = [cardStyles];
  static properties = {
    isShowingStartDate: {type: Boolean, default: true},
    isShowingEndDate: {type: Boolean, default: true},
  };

  headingElement = createRef();

  startDateSlotElement = createRef();

  endDateSlotElement = createRef();

  constructor() {
    super();
    this.isShowingStartDate = true;
    this.isShowingEndDate = true;
  }

  firstUpdated() {
    this.isShowingStartDate = !!this.startDateSlotElement.value?.assignedNodes().length;
    this.isShowingEndDate = !!this.endDateSlotElement.value?.assignedNodes().length;
    this.internals = this.attachInternals();
    this.internals.role = 'group';
    this.internals.ariaLabel = this.querySelector('[slot="summary"]')?.textContent;
  }

  render() {
    return html`
        <h3 ${ref(this.headingElement)}>
          <slot name="summary"></slot>
        </h3>
        ${(this.isShowingStartDate || this.isShowingEndDate) ? html`<div class="dates">
          ${this.isShowingStartDate ? html`
            <slot ${ref(this.startDateSlotElement)} name="start-date"></slot>
            ` : nothing}
          ${this.isShowingStartDate && this.isShowingEndDate ? html`
            <span aria-hidden="true"> – </span>
            <span class="visually-hidden">through</span>
          ` : nothing}
          ${this.isShowingEndDate ? html`
            <slot ${ref(this.endDateSlotElement)} name="end-date"></slot>
          ` : nothing}
        </div>` : nothing}
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('region-card', RegionCard);