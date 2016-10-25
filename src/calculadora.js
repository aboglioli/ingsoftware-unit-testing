'use strict';

function calcular(expresionMatematica) {
  // La expresion regular sólo permite expresiones que contenga más de una
  // caracter, el cual puede ser: número entero, paréntesis y operadores +, -,
  // *, /.
  if(!/^([0-9]|\(|\)|\+|\-|\*|\/)+$/.test(expresionMatematica)) {
    throw new Error('Caracteres de la expresión inválidos');
  }

  // eval(..) es muy peligroso. Puede emitir un TypeError si la expresión
  // matemática ingresada es inválida. Ej.: (2*5) + 10 )
  return eval(expresionMatematica);
}

module.exports = calcular;
