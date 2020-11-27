//Módulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema
const esquemaProyecto = new mongoose.Schema({
  nombre_proyecto: {
    type: String,
  },
  estado:{
    type:String,
  },
});
//Generamos JWT
esquemaProyecto.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombre_proyecto: this.nombre_proyecto,
    },
    "clave"
  );
};
//creamos los exports
const Proyecto = mongoose.model("proyecto", esquemaProyecto);
module.exports.Proyecto = Proyecto;
//esta linea se usa solo en los que genera un jwt
module.exports.esquemaProyecto = esquemaProyecto;