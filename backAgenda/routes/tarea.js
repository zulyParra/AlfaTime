const { request } = require("express");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Usuario } = require("../model/usuario");
const { Rol } = require("../model/rol");
const  { Tarea } = require("../model/tarea")

router.post('/tarea',auth,async(req,res)=>{
  const usuario = await Usuario.findById(req.usuario._id)
  // console.log(req.body.nombre_proyecto);
  const proyecto = await Proyecto.findById(req.body.nombre_proyecto)
  if(!proyecto) return res.status(401).send('no hay proyecto asociado')
  const oldTarea = await Tarea.findOne({
    titulo:req.body.titulo
  }) 
  if(oldTarea) return res.status(401).send('ya existe esta tarea')
  const tarea = new Tarea({
    titulo:req.body.titulo,
    descripcion:req.body.descripcion,
    id_usuario_invita:usuario._id,
    id_usuario_invitado:req.body.id_usuario_invitado,
    fecha_inicio:req.body.fecha_inicio,
    fecha_fin:req.body.fecha_fin,
    id_proyecto:proyecto._id,
    estado:"En progreso"
  })
  const result = await tarea.save()
  res.status(200).send(result)
})

router.delete('/delete',auth,async(req,res)=>{
  const tarea = await Tarea.findOne({
    titulo:req.body.titulo
  })
  if(!tarea) res.status(401).send('no existe esa tarea')
  const delet = await Tarea.findByIdAndDelete(tarea._id)
  res.status(200).send('tarea eliminada')
})

router.get('/listar/:_id',auth,async(req,res)=>{
  console.log('req',req.params);
  const proyecto = await Proyecto.findById(req.params._id)
  console.log('oxoxox',proyecto);
  if(!proyecto) return res.status(401).send('no hay tal proyecto')
  const tarea = await Tarea.find({
    id_proyecto:proyecto._id
    // id_proyecto:"5fc2cc6bd6809f11d1745e10"
    // 5fc2cc6bd6809f11d1745e10
  })
  if(!tarea) return res.status.send('no hay nada')
  res.status(200).send(tarea)
})


module.exports = router;