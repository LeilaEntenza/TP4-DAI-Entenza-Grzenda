const url = require('url');
function parsearUrl(urlDada) {
    try {
        const parsear = url.parse(urlDada, true);
        const infoURL = {
            host: parsear.host,
            pathname: parsear.pathname,
            parametros: Object.fromEntries(new URLSearchParams(parsear.search))
        }
        return infoURL;
    }
    catch (err) {
        console.error(err instanceof TypeError);
    }
}

module.exports = parsearUrl;