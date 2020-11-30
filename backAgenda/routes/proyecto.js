const { request } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Usuario } = require("../model/usuario");
const { Rol } = require("../model/rol");
//Ruta
router.post("/crearProyecto",auth,async(req,res)=>{
  const proyecto = await Proyecto.findOne({
    nombre_proyecto:req.body.nombre_proyecto
  })
  if(proyecto) return res.status(401).send('este proyecto ya existe')
  const proyectos = new Proyecto({
    nombre_proyecto:req.body.nombre_proyecto,
    estado:"activo"
  })
  const roles = new Rol({
    id_usuario:req.usuario._id,
    id_proyecto: proyectos._id,
    rol:"admin"
  })
  const resultP = await proyectos.save()
  
  const resultR = await roles.save()
  const omg= {resultP,resultR}
  res.status(200).send(omg)
  // res.status(200).send(result2)  
})
router.delete('/delete',auth, async(req,res)=>{
  const proyecto = await Proyecto.findOne({
    nombre_proyecto:req.body.nombre_proyecto
  })
  if(!proyecto) return res.status(401).send('no existe tal proyecto')
  const delet = await Rol.findOneAndDelete({
    id_proyecto: proyecto._id
  })
  const dele = await Proyecto.findByIdAndDelete(proyecto._id)
  res.status(200).send('proyecto eliminado')
})
router.get('/get',auth, async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id)
  let rol = await Rol.find({
    id_usuario:usuario._id
  })
  rol = rol.map(v => v.id_proyecto)
  console.log(rol);
  const proyecto = await Proyecto.find({
    _id:{$in:rol}
  })
  // console.log(proyecto);
  res.status(200).send(proyecto)
})

module.exports = router;