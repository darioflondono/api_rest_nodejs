const bcryptjs = require("bcryptjs");

/**
 * Funcion para encriptar contraseña
 * Contraseña sin encriptar: hola.01
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    // hash: es la version encriptada de un string
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
};

/**
 * Lee hash y compara si la contraseña es correcta
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = { encrypt, compare };