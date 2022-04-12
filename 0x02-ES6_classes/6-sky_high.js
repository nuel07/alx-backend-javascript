import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    /* assigning sqft to parent class */
    super(sqft);
    this._floors = floors;
  }

  /* getter for floors */
  get floors() {
    return this._floors;
  }

  /**
     * method that overrides parent class method
     */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
