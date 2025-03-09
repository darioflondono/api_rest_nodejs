const multer = require("multer"); //Es una libreria que permite subir archivos


/**
 *  Configuracion de multer para subir archivos
 */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage); 
        },
    filename: function (req, file, cb) {
        // foto.jpg, file.doc, etc cualquier extension
        const extension = file.originalname.split(".").pop(); //trae el ultimo valor del array ["foto", "jpg"]
        const filename = `file-${Date.now()}.${extension}`; //timestamp formato unix 
        cb(null, filename);
    },
});

/**
 *  Middleware para subir archivos a la carpeta storage
 */
const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;