const Persona = require('./persona');

class Profesor extends Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    super(nombre, apellido, fechaNacimiento);
  }
}

module.exports = Profesor;
