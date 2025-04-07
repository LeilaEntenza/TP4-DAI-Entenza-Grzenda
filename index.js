const concatenarInterpolar = require('./EJ01');
concatenarInterpolar("Hola", "Chau");

const matematica = require('./src/modules/matematica');
console.log(matematica.sumar(2, 2));
console.log(matematica.cuadrado(2));
console.log(matematica.promedioPonderado(12, 99, 13, 1));
console.log(matematica.radio(2));
console.log(matematica.PI);

const Alumno = require('./src/models/alumno');
const lei = new Alumno("leiiii", "48385438");
const mati = new Alumno("MATI", "48716278");

console.log(lei);
console.log(mati);

const copiar = require('./EJ04');

copiar("./lorem_ipsum.txt", "./hola.txt");

const parsearUrl = require('./EJ05');

console.log(parsearUrl("pipipip"));
console.log(parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"));

const obtenerMoneda = require('./EJ07');

console.log(obtenerMoneda("colombia"));