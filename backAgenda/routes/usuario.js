//Módulos internos
const express = require("express");
const router = express.Router();
//Módulos creados
const { Usuario } = require("../model/usuario");
const cargarArchivo = require("../middleware/file");
//Rutas
//Registrar usuario
router.post("/", async (req, res) => {
  //revisamos si existe el mismo correo en nuestra db
  let usuario = await Usuario.findOne({ correo: req.body.correo });
  //si el usuario existe en db
  if (usuario) return res.status(400).send("El usuario ya está registrado");
  //Si el correo no existe
  usuario = new Usuario({
    nombre: req.body.nombre,
    email: req.body.email,
    pass: req.body.pass,
    estado: req.body.estado,
  });
  //Guardamos usuario en db y obtenemos el JWT
  const result = await usuario.save();
  const jwtToken = usuario.generateJWT();
  res.status(200).send({ jwtToken });
});
//Registrar usuario con foto
router.post(
  "/cargarArchivo",
  cargarArchivo.single("image"),
  async (req, res) => {
    //protocolo con que se recibe estos archivos http o https o con el local o el dominio
    const url = req.protocol + "://" + req.get("host");
    //revisamos si existe el mismo correo en nuestra db
    let usuario = await Usuario.findOne({ correo: req.body.correo });
    //si el usuario existe en db
    if (usuario) return res.status(400).send("El usuario ya está registrado");
    //definimos la ruta de la imagen
    let rutaImagen = null;
    if (req.file.filename) {
      rutaImagen = url + "/public/" + req.file.filename;
    } else {
      rutaImagen = null;
    }
    //Guardar usuario
    usuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
      pass: req.body.pass,
      image: rutaImagen,
      estado: req.body.estado,
    });
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({ jwtToken });
  }
);
//Exports
module.exports = router;
