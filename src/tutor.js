'use strict';

const Persona = require('./persona');

class Tutor extends Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    super(nombre, apellido, fechaNacimiento);
  }
}

module.exports = Tutor;
