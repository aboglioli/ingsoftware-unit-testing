'use strict'

const chai = require('chai');
const expect = chai.expect;

const Estudiante = require('../src/estudiante');
const Tematica = require('../src/tematica');
const Categoria = require('../src/categoria');
const Nivel = require('../src/nivel');

const ejercicio = require('../src/ejercicio');

const Ejercicio = ejercicio.Ejercicio;
const Resolucion = ejercicio.Resolucion;

describe('Resolucion', () => {
  it('debe sumar puntos si la solucion es correcta', () => {
    let est = new Estudiante('Fulano', 'De Tal', '08/01/1994');

    let ejercicio = new Ejercicio('Descripción del enunciado', '8+2*5', 5, 'simple');
    ejercicio.setTematica(new Tematica('Aritmetica de enteros'))
      .setCategoria(new Categoria(8))
      .setNivel(new Nivel(0));

    let resolucion = new Resolucion(ejercicio, 18);

    expect(resolucion.evaluar(est)).to.equal(5);
  });

  it('no debe sumar puntos si la resolucion es incorrecta', () => {
    let est = new Estudiante('Fulano', 'De Tal', '08/01/1994');

    let ejercicio = new Ejercicio('Descripción del enunciado', '8+2*5', 6, 'simple');
    ejercicio.setTematica(new Tematica('Aritmetica de enteros'))
      .setCategoria(new Categoria(8))
      .setNivel(new Nivel(0));

    let resolucion = new Resolucion(ejercicio, 17);

    expect(resolucion.evaluar(est)).to.equal(0);
  });
});
