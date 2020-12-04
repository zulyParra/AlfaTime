//Módulos internos
const mongoose = require("mongoose");
//Esquema
const esquemaProyecto = new mongoose.Schema({
  idUsuario: {
    type: String,
  },
  nombre_proyecto: {
    type: String,
  },
  descripcion_proyecto: {
    type: String,
  },
  estado: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});
//creamos los exports
const Proyecto = mongoose.model("proyecto", esquemaProyecto);
module.exports.Proyecto = Proyecto;
