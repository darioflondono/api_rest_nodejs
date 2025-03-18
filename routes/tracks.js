const express = require("express");
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader");

/**
 * Consultar todos los registros de tracks
 */
router.get("/", getItems);


/**
 * Consultar un registro tipo track
 */
router.get("/:id", getItem);

/**
 * Crear un registro tipo track
 */
router.post("/", validatorCreateItem, customHeader, createItem);


/**
 * Actualizar un registro tipo track
 */
router.put("/:id", validatorCreateItem, updateItem);

/**
 * Actualizar un registro tipo track
 */
router.delete("/:id", deleteItem);

module.exports = router;