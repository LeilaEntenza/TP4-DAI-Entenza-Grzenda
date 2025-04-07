const url = require('url');
function parsearUrl(urlDada) {
    try {
        new URL(urlDada);

        const parsear = url.parse(urlDada, true);
        const infoURL = {
            host: parsear.host,
            pathname: parsear.pathname,
            parametros: Object.fromEntries(new URLSearchParams(parsear.search))
        }
        return infoURL;
    }
    catch (err) {
        console.error(err);
        return "";
    }
}

module.exports = parsearUrl;