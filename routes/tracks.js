const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem } = require("../controllers/tracks");

// Define tus rutas aquí
/*router.get("/", (req, res) => {
    res.send("Tracks route");
});*/

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);

module.exports = router;