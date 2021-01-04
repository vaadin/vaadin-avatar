import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

const $_documentContainer = html`<dom-module id="lumo-avatar-group" theme-for="vaadin-avatar-group">
  <template>
    <style>
      [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-m) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-m) + var(--vaadin-avatar-group-overlap));
      }

      [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-m) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-m) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="xlarge"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-xl) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-xl) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="xlarge"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-xl) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-xl) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="large"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-l) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-l) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="large"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-l) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-l) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="small"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-s) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-s) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="small"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-s) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-s) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }

      :host([theme~="xsmall"]) [part="avatar"]:not([dir="rtl"]):not(:first-child) {
        -webkit-mask-position: calc(50% - var(--lumo-size-xs) + var(--vaadin-avatar-group-overlap));
        mask-position: calc(50% - var(--lumo-size-xs) + var(--vaadin-avatar-group-overlap));
      }

      :host([theme~="xsmall"]) [part="avatar"][dir="rtl"]:not(:first-child) {
        -webkit-mask-position: calc(50% + var(--lumo-size-xs) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
        mask-position: calc(50% + var(--lumo-size-xs) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width));
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-avatar-group-overlay" theme-for="vaadin-avatar-group-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-avatar-group-list-box" theme-for="vaadin-avatar-group-list-box">
  <template>
    <style>
      [part="items"] ::slotted(vaadin-item[theme="avatar-group-item"]) {
        padding: var(--lumo-space-xs);
        padding-right: var(--lumo-space-m);
      }

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item[theme="avatar-group-item"]) {
        padding: var(--lumo-space-xs);
        padding-left: var(--lumo-space-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-avatar-group-item" theme-for="vaadin-item">
  <template>
    <style>
      :host([theme="avatar-group-item"]) [part="content"] {
        display: flex;
        align-items: center;
      }

      :host([theme="avatar-group-item"]) ::slotted(vaadin-avatar) {
        width: var(--lumo-size-xs);
        height: var(--lumo-size-xs);
      }

      :host([theme="avatar-group-item"]:not([dir="rtl"])) ::slotted(vaadin-avatar) {
        margin-right: var(--lumo-space-s);
      }

      :host([theme="avatar-group-item"][dir="rtl"]) ::slotted(vaadin-avatar) {
        margin-left: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
const isIE = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));

// NOTE(web-padawan): re-declaring same custom CSS property crashes IE11
if (!isIE) {
  const AvatarGroupStyles = document.createElement('dom-module');
  AvatarGroupStyles.setAttribute('theme-for', 'vaadin-avatar-group');

  const tpl = document.createElement('template');
  tpl.innerHTML = `
    <style>
      :host([theme~="xlarge"]) {
        --vaadin-avatar-group-overlap: 12px;
        --vaadin-avatar-group-overlap-border: 3px;
      }

      :host([theme~="large"]) {
        --vaadin-avatar-group-overlap: 10px;
        --vaadin-avatar-group-overlap-border: 3px;
      }

      :host([theme~="small"]) {
        --vaadin-avatar-group-overlap: 6px;
        --vaadin-avatar-group-overlap-border: 2px;
      }

      :host([theme~="xsmall"]) {
        --vaadin-avatar-group-overlap: 4px;
        --vaadin-avatar-group-overlap-border: 2px;
      }
    </style>
  `;
  AvatarGroupStyles.appendChild(tpl);
  AvatarGroupStyles.register('lumo-avatar-group-variants');
}
