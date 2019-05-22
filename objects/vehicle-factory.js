'use strict';

function vehicleFactory(name, wheels) {
  return {
    name,
    wheels,
    drive: () => 'Moving Forward',
    stop: () => 'Stopping',
  };
}

function carFactory(name) {
  return vehicleFactory(name, 4);
}

function motorcycleFactory() {
  return Object.assign({},
    vehicleFactory(name, 2),
    { wheelie: () => 'Wheee!' }
  );
}

module.exports = {
  motorcycleFactory,
  carFactory,
  vehicleFactory,
};