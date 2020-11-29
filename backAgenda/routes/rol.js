//Módulos internos
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Rol } = require("../model/rol");
const  { Tarea } = require("../model/tarea")
const { Usuario } = require("../model/usuario");

router.post("/invitar",auth, async(req,res)=>{
  const usuario = await Usuario.findOne({
    nombre:req.body.nombre
  })
  if(!usuario) return res.status(401).send('no hay usuario')
  const proyecto = await Proyecto.findOne({
    nombre_proyecto:req.body.nombre_proyecto
  })
  if(!proyecto) return res.status(401).send('no existe tal proyecto')
  let rol = await Rol.findOne({
    id_usuario:usuario._id,
    id_proyecto:proyecto._id
  })
  if(rol) return res.status(401).send('ya esta el usuario invitado')
  rol = new Rol({
    id_usuario:usuario._id,
    id_proyecto:proyecto._id,
    rol:"interesado"
  })
  const result = await rol.save()
  res.status(200).send(result)
})


module.exports = router 