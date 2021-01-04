import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {timeOut} from '@polymer/polymer/lib/utils/async.js';

import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';

import {IronA11yAnnouncer} from '@polymer/iron-a11y-announcer/iron-a11y-announcer.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {IronA11yAnnouncer as IronA11yAnnouncer$0} from '@polymer/iron-a11y-announcer/iron-a11y-announcer.js';

import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {calculateSplices} from '@polymer/polymer/lib/utils/array-splice.js';

import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';

/**
 * `<vaadin-avatar-group>` is a Web Component providing avatar group displaying functionality.
 *
 * To create the avatar group, first add the component to the page:
 *
 * ```
 * <vaadin-avatar-group></vaadin-avatar-group>
 * ```
 *
 * And then use [`items`](#/elements/vaadin-avatar-group#property-items) property to initialize the structure:
 *
 * ```
 * document.querySelector('vaadin-avatar-group').items = [
 *   {name: 'John Doe'},
 *   {abbr: 'AB'}
 * ];
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name   | Description
 * ----------- | ---------------
 * `container` | The container element
 * `avatar`    | Individual avatars
 *
 * See [Styling Components](https://vaadin.com/docs/v14/themes/styling-components.html) documentation.
 */
declare class AvatarGroupElement extends
  ElementMixin(
  ThemableMixin(
  PolymerElement)) {
  readonly _avatars: HTMLElement[];

  /**
   * An array containing the items which will be stamped as avatars.
   *
   * The items objects allow to configure [`name`](#/elements/vaadin-avatar#property-name),
   * [`abbr`](#/elements/vaadin-avatar#property-abbr), [`img`](#/elements/vaadin-avatar#property-img)
   * and [`colorIndex`](#/elements/vaadin-avatar#property-colorIndex) properties on the
   * stamped avatars.
   *
   * #### Example
   *
   * ```js
   * group.items = [
   *   {
   *     name: 'User name',
   *     img: 'url-to-image.png'
   *   },
   *   {
   *     abbr: 'JD',
   *     colorIndex: 1
   *   },
   * ];
   * ```
   */
  items: AvatarGroupItem[]|undefined;

  /**
   * The maximum number of avatars to display. By default, all the avatars are displayed.
   * When _maxItemsVisible_ is set, the overflowing avatars are grouped into one avatar with
   * a dropdown. Setting 0 or 1 has no effect so there are always at least two avatars visible.
   */
  maxItemsVisible: number|null|undefined;

  /**
   * The object used to localize this component.
   * To change the default localization, replace the entire
   * _i18n_ object or just the property you want to modify.
   *
   * The object has the following JSON structure and default values:
   * ```
   * {
   *   // Translation of the anonymous user avatar title.
   *   anonymous: 'anonymous',
   *   // Translation of the avatar group accessible label.
   *   // {count} is replaced with the actual count of users.
   *   activeUsers: {
   *     one: 'Currently one active user',
   *     many: 'Currently {count} active users'
   *   },
   *   // Screen reader announcement when user joins group.
   *   // {user} is replaced with the name or abbreviation.
   *   // When neither is set, "anonymous" is used instead.
   *   joined: '{user} joined',
   *   // Screen reader announcement when user leaves group.
   *   // {user} is replaced with the name or abbreviation.
   *   // When neither is set, "anonymous" is used instead.
   *   left: '{user} left'
   * }
   * ```
   */
  i18n: AvatarGroupI18n;
  ready(): void;
  attributeChangedCallback(name: string, oldValue: string|null, newValue: string|null): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-avatar-group": AvatarGroupElement;
  }
}

export {AvatarGroupElement};

import {AvatarGroupItem} from '../@types/interfaces';

import {AvatarGroupI18n} from '../@types/interfaces';
