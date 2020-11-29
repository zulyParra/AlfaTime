//Módulos internos
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
//Módulos internos
const { Proyecto } = require("../model/proyecto");
const { Rol } = require("../model/rol");
const  { Tarea } = require("../model/tarea")
const { Usuario } = require("../model/usuario");
//Ruta
router.post("/",async (req,res) => {
    //revisamos si existe el mismo correo en nuestra db
    let usuario = await Usuario.findOne({ email: req.body.email});
    //si el usuario existe en db
    if(usuario) return res.status(400).send("El usuario ya está registrado");
    //Si el correo no existe
    usuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        pass: req.body.pass,
        // image: rutaImagen,
        estado: req.body.estado,
    })
//Guardamos usuario en db y obtenemos el JWT
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({jwtToken});
})
router.get("/listaUsuario",auth,async(req,res)=>{
    const proyecto = await Proyecto.findOne({
        nombre_proyecto:req.body.nombre_proyecto
    })
    if(!proyecto) return res.status(401).send('no hay tal proyecto')
    const rol = await Rol.find({
        id_proyecto:proyecto._id
    })
    res.status(200).send(rol)
})
//Exports
module.exports = router;