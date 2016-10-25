'use strict'
const chai = require('chai');
const expect = chai.expect;

const Ejercicio = require('../src/ejercicio');
const Tematica = require('../src/tematica');
const Categoria = require('../src/categoria');
const Nivel = require('../src/nivel');

describe('Tematica', () => {
 it('al crear un ejercicio y agregar la tematica, disponible = true',() => {
  let ejer = new Ejercicio('Enunciado','ExprMat','ResultEsperado','Puntuacion','Tipo');
  ejer.setTematica(new Tematica('Aritmetica basica de enteros'))
  ejer.setCategoria(new Categoria(9))
  ejer.setNivel(new Nivel(2));  

  expect(ejer.disponible).to.equal('true');	

 })
}
