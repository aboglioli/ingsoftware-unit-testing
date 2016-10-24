class Nivel {
  constructor(numero, puntuacionMinima) {
    this.nombre;

    if(this.puntuacionMinima < 0) {
      throw new Error('Puntuación mínima menor a 0');
    }
    this.puntuacionMinima = puntuacionMinima;
  }
}

module.exports = Nivel;
