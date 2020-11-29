//Módulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

//Esquema
const esquemaTarea = new mongoose.Schema({
  titulo: {
    type: String
  },
  descripcion:{
    type: String
  },
  id_usuario_invita: {
    type: String,
  },
  id_usuario_invitado: {
    type: String,
  },
  fecha_inicio:{
    type: Date
  },
  fecha_fin:{
    type: Date
  },
  id_proyecto:{
    type:String,
  },
  estado:{
    type:String
  }
});
//creamos los exports
const Tarea = mongoose.model("tarea", esquemaTarea);
module.exports.Tarea = Tarea;
//esta linea se usa solo en los que genera un jwt
module.exports.esquemaTarea = esquemaTarea;
