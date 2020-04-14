// import { Drone } from './classes/drone.js';
// import { Vehicle } from './classes/vehicle.js';
// import { Car } from './classes/car.js';

import { FleetDataService } from './services/fleet-data-service.js';
import { fleet } from './fleet-data.js';

import $ from 'jquery';

import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';
import { DataTable } from './ui/data-table.js';

// let service = new FleetDataService();
// service.loadData(fleet);
// console.log(service.cars);
// console.log(service.errors);

// let car = service.getCarByLicense('AT2200');
// console.log('car -> ', car);

// let carsSorted = service.getCarsSortedByLicense();
// console.log('carsSorted -> ', carsSorted);

// let carsFiltered = service.filtersCarsByMake('e');
// console.log('carsFiltered -> ', carsFiltered);

// let tb = new TitleBar('My App');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));

let headers = ['License', 'Make', 'Model', 'Miles'];
let dataService = new FleetDataService();
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);

dt.appendToElement($('body'));
