import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js';

registerStyles(
  'vaadin-avatar-group',
  css`
    :host {
      --_lumo-avatar-group-offset: var(--lumo-size-m);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,
  { moduleId: 'lumo-avatar-group' }
);

registerStyles(
  'vaadin-avatar-group-overlay',
  css`
    :host {
      --_lumo-list-box-item-selected-icon-display: none;
      --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
    }

    [part='overlay'] {
      outline: none;
    }
  `,
  { include: ['lumo-overlay', 'lumo-menu-overlay-core'], moduleId: 'lumo-avatar-group-overlay' }
);

registerStyles(
  'vaadin-avatar-group-list-box',
  css`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,
  { moduleId: 'lumo-avatar-group-list-box' }
);

registerStyles(
  'vaadin-item',
  css`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,
  { moduleId: 'lumo-avatar-group-item' }
);
