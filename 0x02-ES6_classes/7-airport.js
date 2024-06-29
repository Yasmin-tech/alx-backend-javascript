/**
 *
 * Implement a class named Airport
 */

export default class Airport {
  /**
   * Creats a new @see {@link Currency}
   *
   *@param {String} code.
   *@param {String} name.
   */

  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * get the name value
   */

  get name() {
    return this._name;
  }

  /**
   * set the name value
   */

  set name(value) {
    this._name = value;
  }

  /**
   * get the code value
   */

  get code() {
    return this._code;
  }

  /**
   * set the code value
   */

  set code(value) {
    this._code = value;
  }

  /**
   * Implement toString method.
   * @returns {String}
   */

  toString() {
    return `[object ${this._code}]`;
  }
}
