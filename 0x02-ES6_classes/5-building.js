/**
 * representation of a Building class
 */
export default class Building {
  /**
     * defines building class
     * @param{number} sqft
     */
  constructor(sqft) {
    /**
         * Implementation required
         */
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  /* getter for sqft */
  get sqft() {
    return this._sqft;
  }
}
