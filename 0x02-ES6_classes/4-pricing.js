import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  /**
   * Creats a new @see {@link Pricing}
   *
   *@param {Number} amount - the price
   *@param {Currency} currency - the Currency object
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * get the amount
   */
  get amount() {
    return this._amount;
  }

  /**
   * set the amount
   */
  set amount(value) {
    this._amount = value;
  }

  /**
   * get the the currency of the price
   */
  get currency() {
    return this._currency;
  }

  /**
   * set the currency object
   */
  set currency(currencyObj) {
    this._currency = currencyObj;
  }

  displayFullPrice() {
    /**
     * Print the price with its currency
     * @returns {string}
     */
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
