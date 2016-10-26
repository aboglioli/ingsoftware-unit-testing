'use strict'
const chai = require('chai');
const expect = chai.expect;

const Ejercicio = require('../src/ejercicio');
const Tematica = require('../src/tematica');
const Categoria = require('../src/categoria');
const Nivel = require('../src/nivel');

describe('Tematica', () => {
 it('getTematica() debería devolver de tipo Matematica',() => {
  let ejer = new Ejercicio('Enunciado','ExprMat','ResultEsperado','Puntuacion','Tipo');
  expect(pers.getTematica()).to.equal('Matematica')

 })
}
