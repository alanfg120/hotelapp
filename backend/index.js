var express    = require('express');
var app        = express();
var cors       = require("cors");
var mongo      =require("./mongo")
var expressJwt = require("express-jwt");

app.use(cors());
app.use(express.static(__dirname + "/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressJwt({ secret: "jwtClave", requestProperty: "token" }).unless({path: ["/usuarios/login"]}));
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("No autorizado")
  }
});


app.use("/ingresos"    , require("./api/ingresos"));
app.use("/habitaciones", require("./api/habitaciones"));
app.use("/usuarios"    , require("./api/usuarios"));




app.listen(3000,async ()=>{
  console.log('Server Ready');
  let {db,conetion} = await mongo()
/*   for (let index = 201; index < 212; index++) {
       await db.collection("habitaciones").insertOne({
          habitacion:index.toString(),
          estado:"disponible"
      })
  }
  for (let index = 301; index < 313; index++) {
    await db.collection("habitaciones").insertOne({
       habitacion:index.toString(),
       estado:"disponible"
   })
} */

}); 