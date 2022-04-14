/**
 * Car class representation
 */
export default class Car {
  /**
     * defines a car class
     * @param{string} brand
     * @param{string} motor
     * @param{string} color
     */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
     * method that returns class object
     */
  cloneCar() {
    const original = this;
    return Object.assign(Object.create(Object.getPrototypeOf(original)), {
      _brand: undefined,
      _motor: undefined,
      _color: undefined,
    });
  }
}
