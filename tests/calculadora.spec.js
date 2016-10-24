'use strict'

const chai = require('chai');
const expect = chai.expect;

// calcular es una función
const calcular = require('../src/calculadora');

describe('Calculadora', () => {
  it('debe devolver un número', () => {
    expect(calcular('2+5')).to.be.a('number');
  });

  it('debe devolver correctmente un resultado: 2+5 = 7', () => {
    expect(calcular('2+5')).to.equal(7);
  });

  it('debe lanzar Error si no se usaron caracteres permitidos: 2+5abc', () => {
    expect(calcular.bind(null, '2+5abc')).to.throw('Caracteres de la expresión inválidos');
  });

  it('debe lanzar un TypeError si la expresión es inválida: 2+5()', () => {
    expect(calcular.bind(null, '2+5()')).to.throw('5 is not a function');
  });

  it('debe lanzar un SyntaxError si la expresión es inválida: 2*5+(8+)', () => {
    expect(calcular.bind(null, '2*5+(8+)')).to.throw('Unexpected token )');
  });

});
