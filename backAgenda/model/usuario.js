//Módulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema
const esquemaUsuario = new mongoose.Schema({
  nombre: {
    type: String,
  },
  email: {
    type: String,
  },
  pass: {
    type: String,
  },
  image: {
    type: String,
  },
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
  estado:{
    type:String,
  },
});
//Generamos JWT
esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombre: this.nombre,
      correo: this.correo,
    },
    "clave"
  );
};
//creamos los exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
//esta linea se usa solo en los que genera un jwt
module.exports.esquemaUsuario = esquemaUsuario;
