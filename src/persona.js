class Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }

  set fechaNacimiento(fechaNacimiento) {
    this._fechaNacimiento = fechaNacimiento instanceof Date
                            ? fechaNacimiento
                            : new Date(fechaNacimiento); // formato MM/DD/YYYY
  }

  get fechaNacimiento() {
    return this._fechaNacimiento;
  }

  set padre(padre) {
    if(this._padre) {
      throw new Error('Ya existe padre asignado');
    }

    this._padre = padre;
  }

  get padre() {
    return this._padre;
  }

  set madre(madre) {
    if(this._madre) {
      throw new Error('Ya existe madre asignada');
    }

    this._madre = madre;
  }

  get madre() {
    return this._madre;
  }

  getEdad() {
    let today = new Date();

    let age = today.getFullYear() - this.fechaNacimiento.getFullYear();

    if (today.getMonth() < this.fechaNacimiento.getMonth() - 1) {
      age--;
    }

    if (this.fechaNacimiento.getMonth() - 1 == today.getMonth() &&
      today.getDate() < this.fechaNacimiento.getDate()) {
      age--;
    }

    return age;
  }

  toString() {
    let str = `${this.nombre} ${this.apellido}`;

    if(this._madre)
      str += ` (madre: ${this.madre})`;

    if(this._padre)
      str += ` (padre: ${this.padre})`;

    return str;
  }
}

module.exports = Persona;
