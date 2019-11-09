var MongoClient = require("mongodb").MongoClient;
const url="mongodb://localhost:27017"
const dbName = "apptrans";

async function mongo(){
  const Mongo   = new MongoClient(url, { useNewUrlParser: true })
  let conection = await Mongo.connect()
  const db      = conection.db(dbName)
  return   {db,conection}
}


module.exports = mongo