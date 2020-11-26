const { request } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Usuario } = require("../model/usuario");
const { Rol } = require("../model/rol");
//Ruta
router.post("/crearProyecto",auth,async()=>{
  const usuario = await Usuario.findById(req.usuario._id)
  if(!usuario) return res.status(401).send("usuario no existe en DB")
  const rol = await Rol.find({
    id_usuario:usuario._id
  }) 
  rol.map(async function(v){
    const proyecto = await Proyecto.findOne({
      id_proyecto: v.id_proyecto
    });
    if(proyecto.nombre_proyecto==req.body.nombre_proyecto){
      return proyecto
    }
  })
  if(rol.length>0){
    return res.status(401).send("ya existe el proyecto")
  }
  const proyectos = new Proyecto({
    nombre_proyecto:req.body.nombre_proyecto,
    estado:"activo"
  })
  const roles = new Rol({
    id_usuario:usuario._id,
    id_proyecto: proyectos._id,
    rol:"admin"
  })
  const result = await proyectos.save()
  res.status(200).send(result)
  const result2 = await roles.save()
  res.status(200).send(result2)  
})

module.exports = router;