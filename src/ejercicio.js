'use strict';

const calcular = require('./calculadora');

class Ejercicio {
  constructor(enunciado, expresionMatematica, puntuacion, tipo) {

    if (puntuacion < 1 || puntuacion > 10) {
      throw new Error('Puntuacion fuera de rango');
    }

    this.enunciado = enunciado;
    this.expresionMatematica = expresionMatematica;
    this.puntuacion = puntuacion;

    // Con tipo sabemos si es un ejercicio "simple" (donde sólo hay que ingresar
    // un resultado) o "con_expression" (donde el estudiante también tiene que
    // ingresar la expresión matemática y luego resolverla). Por defecto:
    // 'simple'.
    this.tipo = tipo || 'simple';

    // Disponible indicará cuando al ejercicio ya se le haya asignado temática,
    // categoría y nivel. O sea, un ejercicio peude estar guardado sin habérsele
    // asignado nada, pero no estará disponible para mostrarselo al usuario que
    // vaya a jugar.
    this.disponible = false;

    this.resultadoEsperado = calcular(expresionMatematica);
  }

  setTematica(tematica) {
    this.tematica = tematica;

    if(this.categoria && this.nivel) this.disponible = true;

    return this;
  }

  setCategoria(categoria) {
    this.categoria = categoria;

    if(this.tematica && this.nivel) this.disponible = true;

    return this;
  }

  setNivel(nivel) {
    this.nivel = nivel;

    if(this.tematica && this.categoria) this.disponible = true;

    return this;
  }
}

class Resolucion {
  constructor(ejercicio, resultadoDelUsuario, expresionDelUsuario) {
    this.ejercicio = ejercicio;
    this.resultadoDelUsuario = resultadoDelUsuario;
    this.expresionDelUsuario = expresionDelUsuario || null;
  }

  /**
   * Devuelve la puntuación obtenida
   */
  evaluar(estudiante) {
    if(this.ejercicio.tipo === 'con_expresion') {
      if(this.expresionDelUsuario && this.expresionDelUsuario === this.ejercicio.expresionMatematica) {
        return this.ejercicio.resultadoEsperado === this.resultadoDelUsuario
                ?  this.ejercicio.puntuacion
                : 0;
      }

      return 0;
    }

    // Evalua si el resultado del estudiante es igual al esperado, si es así,
    // asigna el puntaje del ejercicio, sino 0
    return this.ejercicio.resultadoEsperado === this.resultadoDelUsuario
          ? this.ejercicio.puntuacion
          : 0;
  }
}

module.exports = {
  Ejercicio: Ejercicio,
  Resolucion: Resolucion
}
