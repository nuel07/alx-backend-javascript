export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
     * default class description
     */
  toString() {
    return `[object ${this._code}]`;
  }
}
