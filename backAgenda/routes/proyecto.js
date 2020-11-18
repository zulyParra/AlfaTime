const { request } = require("express");
const express = require("express");
const router = express.Router();
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Usuario } = require("../model/usuario");
const { Rol } = require("../model/rol");
//Ruta
router.post("/",async()=>{
  const proyecto = await Proyecto.findOne({
    key: 'value'
  });
  
})