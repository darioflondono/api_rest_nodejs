const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`);
        const route = require(`./${file}`);
        if (route && route.stack && route.stack[0] && route.stack[0].handle) {
            router.use(`/${name}`, route); // Asegúrate de que el módulo exporte un router de Express
        } else {
            console.error(`El archivo ${file} no exporta un router de Express`);
        }
    }
});

module.exports = router;