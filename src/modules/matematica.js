const PI = Math.PI;

const sumar = (num1, num2) => num1 + num2;
const cuadrado = (num) => num * num;
const promedioPonderado = (num1, abundancia1, num2, abundancia2) => num1 * abundancia1 / 100 + num2 * abundancia2 / 100;
const radio = (r) => PI * cuadrado(r);

module.exports = {sumar, cuadrado, promedioPonderado, radio, PI};