var express = require('express');
var app = express();
var cors = require("cors");


app.use(cors());
app.use(express.static(__dirname + "/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/ingresos", require("./api/ingresos"));
app.use("/habitaciones", require("./api/habitaciones"));




app.listen(3000,()=>{
  console.log('Server Ready');
}); 