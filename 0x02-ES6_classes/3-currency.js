/**
 *
 * Implement a class named Currency
 */

export default class Currency {
  /**
   * Creats a new @see {@link Currency}
   *
   *@param {String} code - the Currency code like '$'
   *@param {String} name - the Currency name like 'Dollar'
   */

  constructor(code, name) {
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
   * Creates the full string representation of this Currency.
   * @returns {String}
   */

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
