import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="lumo-avatar" theme-for="vaadin-avatar">
  <template>
    <style>
      :host {
        width: var(--lumo-size-m);
        height: var(--lumo-size-m);
        color: var(--lumo-secondary-text-color);
        background-color: var(--lumo-contrast-10pct);
        border-radius: 50%;
        outline: none;
        cursor: default;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([has-color-index]) {
        color: var(--lumo-base-color);
      }

      :host([focus-ring]) {
        border-color: var(--lumo-primary-color-50pct);
      }

      [part="icon"],
      [part="abbr"] {
        fill: currentColor;
      }

      [part="abbr"] {
        font-family: var(--lumo-font-family);
        font-size: 2.4375em;
        font-weight: 500;
      }

      :host([theme~="xlarge"]) [part="abbr"] {
        font-size: 2.5em;
      }

      :host([theme~="large"]) [part="abbr"] {
        font-size: 2.375em;
      }

      :host([theme~="small"]) [part="abbr"] {
        font-size: 2.75em;
      }

      :host([theme~="xsmall"]) [part="abbr"] {
        font-size: 3em;
      }

      :host([theme~="xlarge"]) {
        width: var(--lumo-size-xl);
        height: var(--lumo-size-xl);
      }

      :host([theme~="large"]) {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
      }

      :host([theme~="small"]) {
        width: var(--lumo-size-s);
        height: var(--lumo-size-s);
      }

      :host([theme~="xsmall"]) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
