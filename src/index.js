/**
 * Ejemplo de uso
 */

const Persona = require('./persona');

// Formato de fecha: MES/DIA/AÑO o AÑO-MES-DIA
let fulano = new Persona('Fulanito', 'de Tal', '08/01/1994' /* 1994-08-01 */);

let madreFulano = new Persona('Madre', 'de Tal', '01/01/1975');
let padreFulano = new Persona('Padre', 'de Tal');
padreFulano.fechaNacimiento =  '12/08/1971';

fulano.padre = padreFulano;
fulano.madre = madreFulano;

console.log(fulano.toString());
console.log(fulano.getEdad());

console.log("---");

console.log(padreFulano.toString());
console.log(padreFulano.getEdad());

console.log("---");

console.log(madreFulano.toString());
console.log(madreFulano.getEdad());
