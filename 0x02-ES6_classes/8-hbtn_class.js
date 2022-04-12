/**
 * represents a HolbertonClass
 */
export default class HolbertonClass {
  /**
     * defines the class
     * @param{number} size
     * @param{string} location
     */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null;
  }
}
