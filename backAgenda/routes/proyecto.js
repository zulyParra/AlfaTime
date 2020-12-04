const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Usuario } = require("../model/usuario");
//const { Rol } = require("../model/rol");
//Ruta
//Obtener proyectos del usuario
// router.get("/lista", auth, async (req, res) => {
//   //Buscamos el usuario logueado
//   const usuario = await Usuario.findById(req.usuario._id);
//   //Si el usuario no existe
//   if (!usuario) return res.status(401).send("Usuario no existe en DB");
//   //si el usuario si existe
//   const proyecto = await Proyecto.find({ idUsuario: req.usuario._id });
//   res.send(proyecto);
// });

//Registrar un proyecto
router.post("/", auth, async (req, res) => {
  //obtenemos el id del ususario logueado con correo y pass
  const usuario = await Usuario.findById(req.usuario._id);
  //Si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe");
  //Si el usuario existe
  const proyecto = new Proyecto({
    idUsuario: usuario._id,
    nombre_proyecto: req.body.nombre_proyecto,
    descripcion_proyecto: req.body.descripcion_proyecto,
    estado: req.body.estado,
  });
  //Enviamos el resultado a la db para que se guarde
  const result = await proyecto.save();
  res.status(200).send(result);
});

//Editar Proyecto
router.put("/", auth, async (req, res) => {
  //Buscar usuario
  const usuario = await Usuario.findById(req.usuario._id);
  //si el usuario no existe
  if (!usuario) return res.status(401).send("El usuario no existe en DB");
  //Realizamos el update
  const proyecto = await Proyecto.findByIdAndUpdate(
    req.body._id,
    {
      idUsuario: usuario._id,
      nombre_proyecto: req.body.nombre_proyecto,
      descripcion_proyecto: req.body.descripcion_proyecto,
      estado: req.body.estado,
    },
    {
      new: true,
    }
  );
  //Si el usuario no tiene proyectos
  if (!proyecto)
    return res.status(401).send("El usuario no tiene proyectos asociados");
  //Si se realizó un update a algun proyecto
  res.status(200).send(proyecto);
});

//Eliminar proyecto
router.delete("/:_id", auth, async (req, res) => {
  //Buscamos el usuario por id
  const usuario = await Usuario.findById(req.usuario._id);
  //Si no existe
  if (!usuario) return res.status(401).send("No existe usuario en DB");
  //Eliminamos proyecto
  const proyecto = await Proyecto.findByIdAndDelete(req.params._id);
  //si no encuentra ningun proyecto con ese id
  if (!proyecto) return res.status(401).send("No hay proyecto con ese ID");
  //Si se encuentra el proyecto
  res.status(200).send({
    message: "Proyecto eliminado",
  });
});
// router.post("/crearProyecto", auth, async () => {
//   const usuario = await Usuario.findById(req.usuario._id);
//   if (!usuario) return res.status(401).send("usuario no existe en DB");
//   const rol = await Rol.find({
//     id_usuario: usuario._id,
//   });
//   rol.map(async function (v) {
//     const proyecto = await Proyecto.findOne({
//       id_proyecto: v.id_proyecto,
//     });
//     if (proyecto.nombre_proyecto == req.body.nombre_proyecto) {
//       return proyecto;
//     }
//   });
//   if (rol.length > 0) {
//     return res.status(401).send("ya existe el proyecto");
//   }
//   const proyectos = new Proyecto({
//     nombre_proyecto: req.body.nombre_proyecto,
//     estado: "activo",
//   });
//   const roles = new Rol({
//     id_usuario: usuario._id,
//     id_proyecto: proyectos._id,
//     rol: "admin",
//   });
//   const result = await proyectos.save();
//   res.status(200).send(result);
//   const result2 = await roles.save();
//   res.status(200).send(result2);
// });

module.exports = router;
