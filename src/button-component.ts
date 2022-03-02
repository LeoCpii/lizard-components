import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lz-button')
export class ButtonComponent extends LitElement {
  static styles = css``;

  @property({ type: String }) label = 'Hey there';

  _click() {
    console.log('clicando');
  }

  render() {
    return html`
      <button @click=${this._click}>${this.label}</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lz-button': ButtonComponent;
  }
}