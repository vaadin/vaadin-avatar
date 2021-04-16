import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';

registerStyles(
  'vaadin-avatar',
  css`
    :host {
      --vaadin-avatar-size: 2.25rem;
      color: var(--material-secondary-text-color);
      background-color: var(--material-secondary-background-color);
      border-radius: 50%;
      cursor: default;
      outline: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--material-primary-contrast-color);
    }

    :host([focus-ring]) {
      border-color: var(--material-primary-color);
    }

    :host([clickable]) {
      cursor: pointer;
      position: relative;
    }

    :host([clickable])::after {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: inherit;
      transition: opacity 0.2s;
      opacity: 0;
      background-color: var(--material-primary-color);
    }

    :host([clickable]:hover)::after {
      opacity: 0.1;
    }

    :host([clickable]:active)::after {
      opacity: 0.2;
      transition-duration: 0s;
    }

    :host([has-color-index][clickable]:hover)::after {
      opacity: 0.15;
    }

    :host([has-color-index][clickable]:active)::after {
      opacity: 0.3;
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--material-font-family);
      font-size: 3em;
      font-weight: 500;
    }
  `,
  { moduleId: 'material-avatar' }
);
