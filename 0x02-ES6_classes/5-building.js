/**
 *
 * Implement a clas named Building
 */

export default class Building {
  /**
   * Creates a new @see {@link Building}.
   *
   * @param {Number} sqft
   *
   * If a class that extends from Building does not have a evacuationWarningMessage method,
   * it will throw an error with the message:
   *    Class extending Building must override evacuationWarningMessage
   */

  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  /**
   * get the sqft value
   */

  get sqft() {
    return this._sqft;
  }

  /**
   * set the sqft value
   */

  set sqft(value) {
    this._sqft = value;
  }
}
