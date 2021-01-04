/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/vaadin-avatar.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

/**
 * `<vaadin-avatar>` is a Web Component providing avatar displaying functionality.
 *
 * ```html
 * <vaadin-avatar img="avatars/avatar-1.jpg"></vaadin-avatar>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * --------- | ---------------
 * `abbr`    | The abbreviation element
 * `icon`    | The icon element
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `has-color-index` | Set when the avatar has `colorIndex` and the corresponding custom CSS property exists.
 *
 * See [Styling Components](https://vaadin.com/docs/v14/themes/styling-components.html) documentation.
 */
declare class AvatarElement extends
  ElementMixin(
  ThemableMixin(
  PolymerElement)) {

  /**
   * The path to the image
   */
  img: string|null|undefined;

  /**
   * A shortened form of name that is displayed
   * in the avatar when `img` is not provided.
   */
  abbr: string|null|undefined;

  /**
   * Full name of the user
   * used for the title of the avatar.
   */
  name: string|null|undefined;

  /**
   * Color index used for avatar background.
   */
  colorIndex: number|null|undefined;

  /**
   * The object used to localize this component.
   * To change the default localization, replace the entire
   * _i18n_ object or just the property you want to modify.
   *
   * The object has the following JSON structure and default values:
   *           {
   *             // Translation of the anonymous user avatar title.
   *             anonymous: 'anonymous'
   *           }
   */
  i18n: AvatarI18n;
  ready(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-avatar": AvatarElement;
  }
}

export {AvatarElement};

import {AvatarI18n} from '../@types/interfaces';
