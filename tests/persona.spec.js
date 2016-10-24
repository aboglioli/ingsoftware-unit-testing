'use strict'

const chai = require('chai');
const expect = chai.expect;

const Persona = require('../src/persona');

describe('Persona', () => {
  it('toString() debería devolver nombre y apellido en un string', () => {
    let pers = new Persona('Nombre', 'Apellido', '08/01/1994' /* 1994-08-01 */);

    expect(pers).respondTo('toString');
    expect(pers.toString()).to.be.a('string');
    expect(pers.toString()).to.equal('Nombre Apellido');
  });


  it('getEdad() debería devolver la edad de acuerdo a la fecha de nacimiento', () => {
    let pers = new Persona('Nombre', 'Apellido', '08/01/1994');

    expect(pers.getEdad()).to.equal(22);
  });

  it('no debo poder asignarle un usuario y contraseña menor a 5 y 8 caracteres respectivamente', () => {
    let pers = new Persona('Nombre', 'Apellido', '08/01/1994');

    // El bind es un caso particular, no le den importancia, solo usenlo para
    // testear si tira o no un "Error"
    expect(pers.setUsuario.bind(pers, 'adm')).to.throw('Usuario debe tener al menos 5 caracteres');
    expect(pers.setContrasenia.bind(pers, '123')).to.throw('Contraseña debe tener al menos 8 caracteres');

    expect(pers.setUsuario.bind(pers, 'admin')).to.not.throw('Usuario debe tener al menos 5 caracteres');
    expect(pers.setContrasenia.bind(pers, '12345678')).to.not.throw('Contraseña debe tener al menos 8 caracteres');
  });
});
