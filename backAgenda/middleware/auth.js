//Móduolos de node
const jwt = require("jsonwebtoken");
//Crear función middleware
function auth(req, res, next) {
  let jwtToken = req.header("Authorization");
  
  jwtToken = jwtToken.split(" ")[1];
  //Si no existe el token
  if (!jwtToken) return res.status(401).send("No hay token para validar");
  //Si el jwt existe
  try {
    const payload = jwt.verify(jwtToken, "clave");
    req.usuario = payload;
    next();
  } catch (error) {
    res.status(401).send("Token no válido, sin authorización a procesos");
  }
}
//Exports
module.exports = auth;
