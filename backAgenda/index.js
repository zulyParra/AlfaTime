const express = require("express")
const mongoose = require ("mongoose")
const cors = require('cors')
// modulos creados
const usuario = require("./routes/usuario")
const auth = require('./routes/auth')
const proyecto = require("./routes/proyecto")
//app
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/usuario/",usuario)
app.use("/api/auth/",auth)
app.use("/api/proyecto/",proyecto)

const port = process.env.PORT || 3000
app.listen(port,()=>{console.log("ejecutando en puerto: ", port);})
//registro en Mongo
mongoose.connect("mongodb://localhost/alfaTime",{
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