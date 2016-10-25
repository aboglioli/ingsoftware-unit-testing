'use strict';

const Persona = require('./persona');

class Estudiante extends Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    super(nombre, apellido, fechaNacimiento);
  }
}

module.exports = Estudiante;
