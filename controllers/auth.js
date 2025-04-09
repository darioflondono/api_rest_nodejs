const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models")
const { tokenSign } = require("../utils/handleJwt");


const loginController = async (req, res) => {

    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    //permite ocultar el password en la respuesta
    dataUser.set("password", undefined, { strict: false });
  
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });

}

module.exports = { loginController }