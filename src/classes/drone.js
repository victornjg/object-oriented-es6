import { Vehicle } from './vehicle.js';

export class Drone extends Vehicle {
  constructor(license, model, latLong) {
    super(license, model, latLong);
    this._airTimeHours = null;
    this._base = null;
  }

  get airTimeHours() {
    return this._airTimeHours;
  }

  set airTimeHours(value) {
    this._airTimeHours = value;
  }

  get base() {
    return this._base;
  }

  set base(value) {
    this._base = value;
  }

  static getCompany() {
    console.log('in getCompany');
  }

  fly() {
    console.log('Drone ' + super.license + ' is flying!');
  }
}

Drone.maxHeight = 2000;
