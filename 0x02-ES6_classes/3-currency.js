/** class that represents a currency */
export default class Currency {
  /**
     * define currency
     * @param{string} code
     * @param{sting} name
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
    this._code = theCode;
  }

  /** getter method for the name */
  get() {
    return this._name;
  }

  /** setter method for the name */
  set(theName) {
    this._name = theName;
  }

  /** method that displays full currency */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
