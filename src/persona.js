class Persona {
  constructor(nombre, apellido, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.setFechaNacimiento(fechaNacimiento);
  }

  setUsuario(usuario) {
    if(usuario.length < 5) {
      throw new Error('Usuario debe tener al menos 5 caracteres');
    }
    this.usuario = usuario;
  }

  setContrasenia(contrasenia) {
    if(contrasenia.length < 8) {
      throw new Error('Contraseña debe tener al menos 8 caracteres');
    }
    this.contrasenia = contrasenia;
  }

  setFechaNacimiento(fechaNacimiento) {
    // si la fecha de nacimiento no es del tipo Date, crea una nueva instancia
    // de Date
    this.fechaNacimiento = fechaNacimiento instanceof Date
                            ? fechaNacimiento
                            : new Date(fechaNacimiento); // formato MM/DD/YYYY
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
