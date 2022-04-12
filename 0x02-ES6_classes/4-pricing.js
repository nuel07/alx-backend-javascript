/* eslint-disable no-unused-vars */
import Currency from './3-currency';
/* eslint-disable no-unused-vars */

/**
 * representation of pricing class
 */
export default class Pricing {
  /**
     * defines the pricing class
     * @param{number} amount
     * @param{string} currency
     */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /** getter method for amount */
  get amount() {
    return this._amount;
  }

  /** setter method for amount */
  set amount(theAmount) {
    this._amount = theAmount;
  }

  /** getter for currency */
  get currency() {
    return this._currency;
  }

  /** setter for currency */
  set currency(theCurrency) {
    this._currency = theCurrency;
  }

  /** method to displays full price */
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
     * static method for currency conversion
     * @param{number} amount
     * @param{number} conversionRate - the currency conversion rate
     */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
