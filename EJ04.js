function copiar(entrada, salida) {
    const fs = require('fs');

    fs.copyFileSync(entrada, salida);
    console.log("Archivo copiado correctamente.");
}

module.exports = copiar;