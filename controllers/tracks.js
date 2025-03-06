const tracksModel = require("../models/nosql/tracks");
const { handleHttpError } = require("../utils/handlerError");
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const user = req.user;
    const data = await tracksModel.find({});
    console.log("Data: ", data);
    res.send({ data,  user });
    //res.send("iNGRESO al controlador de Tracks.");
  } catch (e) {
    console.log(e)
    handleHttpError(res, e);
    }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = req;
    console.log(body);
    const data = await tracksModel.create(body);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

module.exports = { getItems, createItem };