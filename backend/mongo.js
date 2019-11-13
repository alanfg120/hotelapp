var MongoClient = require("mongodb").MongoClient;
const url="mongodb://localhost:27017"
const dbName = "hotel";
const opciones = {
   useUnifiedTopology: true,
   useNewUrlParser: true 
}


async function mongo(){
  const Mongo   = new MongoClient(url, opciones)
  let conection = await Mongo.connect()
  const db      = conection.db(dbName)
  return   {db,conection}
}


module.exports = mongo