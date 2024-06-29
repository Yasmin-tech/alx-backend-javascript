import Building from './5-building.js';
/**
 * Implement a class named SkyHighBuilding that extends from Building
 */

export default class SkyHighBuilding extends Building {
  /**
   * Creates a new @see {@link SkyHighBuilding}.
   *
   * @param {Number} sqft.
   * @param {Number} floors.
   */

  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * get the floors value
   */

  get floors() {
    return this._floors;
  }

  /**
   * set the floors value
   */

  set floors(value) {
    this._floors = value;
  }

  /**
   * Override the method named evacuationWarningMessage from the base class
   *
   * @returns {String}
   */

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
