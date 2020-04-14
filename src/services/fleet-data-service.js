import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { DataError } from '../classes/data-error.js';

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case 'car':
          if (this.validateCarData(data)) {
            let car = this.loadCar(data);
            if (car) this.cars.push(car);
          } else {
            this.errors.push(new DataError('Invalid car data', data));
          }
          break;

        case 'drone':
          if (this.validateDroneData(data)) {
            let drone = this.loadDrone(data);
            if (drone) this.drones.push(drone);
          } else {
            this.errors.push(new DataError('Invalid drone data', data));
          }
          break;

        default:
          let e = new DataError('Invalid vehicle type', data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch (e) {
      this.errors.push(new DataError('Error loading car', car));
    }
    return null;
  }

  loadDrone(drone) {
    try {
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch (e) {
      this.errors.push(new DataError('Error loading drone', drone));
    }
    return null;
  }

  validateCarData(car) {
    let requiredProps = ['license', 'make', 'model', 'latLong', 'miles'];
    let hasErrors = false;

    for (let field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError(`Invalid field ${field}`, car));
        hasErrors = true;
      }
    }

    return !hasErrors;
  }

  validateDroneData(drone) {
    let requiredProps = ['license', 'airTimeHours', 'model', 'latLong', 'base'];
    let hasErrors = false;

    for (let field of requiredProps) {
      if (!drone[field]) {
        this.errors.push(new DataError(`Invalid field ${field}`, drone));
        hasErrors = true;
      }
    }

    return !hasErrors;
  }

  getCarByLicense(license) {
    return this.cars.find((car) => car.license === license);
  }

  getCarsSortedByLicense() {
    return this.cars.sort((a, b) => {
      if (a.license > b.license) return 1;
      if (a.license < b.license) return -1;
      return 0;
    });
  }

  filtersCarsByMake(filter) {
    return this.cars.filter((car) => car.make.indexOf(filter) >= 0);
  }
}
