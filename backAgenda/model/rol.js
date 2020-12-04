//Módulos internos
const mongoose = require("mongoose");

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

//creamos los exports
const Rol = mongoose.model("rol", esquemaRol);
module.exports.Rol = Rol;

