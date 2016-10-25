'use strict'
const chai = require('chai');
const expect = chai.expect;
const Ejercicio = require('../src/ejercicio');

describe('Ejercicio', () => {
 it('al crear un ejercicio la puntuacion debe ser distinta a vacia',() => {
   let ejer = new Ejercicio('Enunciado','ExpMatematica','ResultoEsperado','Puntuacion','Tipo');
   expect(ejer.puntuacion).to.notequal('');	
 })
}
