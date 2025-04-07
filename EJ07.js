function obtenerMoneda(codigo) {
    const moneda = require('currency-codes');
    let monedas = [];
    moneda.country(codigo).forEach((m) => { monedas.push(m.currency) });
    return monedas;
}

module.exports = obtenerMoneda;