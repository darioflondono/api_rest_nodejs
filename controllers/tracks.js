const { matchedData } = require("express-validator");
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
    res.send({ data,  user });
  } catch (e) {
    console.log(e)
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};


/**
 * Obtener un detalle dado un id
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try{
    const { id } = req.params;
    console.log(`El ID recibido es: ${id}`);
    const data = await tracksModel.findById(id);
    console.log("Data getItem: ", data);
    res.send({ data });
  }catch(e){
    handleHttpError(res,"ERROR_GET_ITEM", 400)
  }
};



/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    console.log("Data create: ", body);
    const data = await tracksModel.create(body);
    console.log("Data tracksModel: ", data);
    res.status(201);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR CREATE ITEMS");
  }
};


/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(
      id, body
    );
    console.log("Data update: ", data);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEMS");
  }
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try{
   // req = matchedData(req);
    const { id } = req.params;
    const deleteResponse = await tracksModel.deleteOne({_id:id});
    console.log("Respuesta::", deleteResponse);
    const data = {
      deleted: deleteResponse.matchedCount
    }
    
    res.send({deleteResponse});
  }catch(e){
    console.log(e)
    handleHttpError(res,"ERROR_DELETE_ITEM")
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };