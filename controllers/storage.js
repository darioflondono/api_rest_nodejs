const storageModel = require("../models/nosql/storage");
const PUBLIC_URL = process.env.PUBLIC_URL || "http://localhost:3000";


/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    const user = req.user;
    const data = await storageModel.find({});
    console.log("Data: ", data);
    res.send({ data,  user });
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    const { body, file } = req;
    console.log("File: ", file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    };
    const data = await storageModel.create(fileData);
    res.status(201);
    res.send({ data });
};

module.exports = { getItems, createItem };