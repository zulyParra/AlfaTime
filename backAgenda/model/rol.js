//Módulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema
const esquemaRol = new mongoose.Schema({
  id_usuario: {
    type: String,
  },
  id_proyecto:{
    type:String,
  },
  rol:{
    type:String
  }
});
//Generamos JWT
esquemaRol.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombre_proyecto: this.nombre_proyecto,
    },
    "clave"
  );
};
//creamos los exports
const Rol = mongoose.model("rol", esquemaRol);
module.exports.Rol = Rol;
//esta linea se usa solo en los que genera un jwt
module.exports.esquemaRol = esquemaRol;