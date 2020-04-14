export class Vehicle {
  constructor(license, model, latLong) {
    this._license = license;
    this._model = model;
    this._latLong = latLong;
  }

  get license() {
    return this._license;
  }

  get model() {
    return this._model;
  }

  get latLong() {
    return this._latLong;
  }

  set license(value) {
    this._license = value;
  }

  set model(value) {
    this._model = value;
  }

  set latLong(value) {
    this._latLong = value;
  }

  start() {
    console.log('starting Vehicle');
  }

  static getCompany() {
    console.log('My company');
  }
}
