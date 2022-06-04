/** class that represents a currency */
export default class Currency {
  /**
     * define currency
     * @param{string} code
     * @param{string} name
     */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /** getter method for the code */
  get code() {
    return this._code;
  }

  /** setter method for the code */
  set code(theCode) {
    if (typeof theCode !== 'string') throw new TypeError('The code must be a string');
    this._code = theCode;
  }

  /** getter method for the name */
  get name() {
    return this._name;
  }

  /** setter method for the name */
  set name(theName) {
    if (typeof theName !== 'string') throw new TypeError('The name must be a string');
    this._name = theName;
  }

  /** method that displays full currency */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
