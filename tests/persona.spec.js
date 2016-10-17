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
});
