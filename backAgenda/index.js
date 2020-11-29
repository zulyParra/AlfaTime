const express = require("express")
const mongoose = require ("mongoose")
const cors = require('cors')
// modulos creados
const usuario = require("./routes/usuario")
const auth = require('./routes/auth')
const proyecto = require("./routes/proyecto")
const tarea = require("./routes/tarea")
const rol = require("./routes/rol")
//app
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/rol/",rol)
app.use("/api/usuario/",usuario)
app.use("/api/auth/",auth)
app.use("/api/proyecto/",proyecto)
app.use("/api/tarea/",tarea)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log("ejecutando en puerto: ", port);})
//registro en Mongo
mongoose.connect("mongodb://localhost/alphaTime",{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("conexion con mongo: on");
})
.catch((error)=>{
  console.log("conexion con mongo: off");
})