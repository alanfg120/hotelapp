const router       = require("express").Router();
const mongo        = require("./../mongo");
const { ObjectId } = require("mongodb");


//mac 5dcdb6032b9c508a5bd44194
//pc  5dcbff9a55dd5a2a500214a2

router.post("/new", async (req, res) => {
             console.log(req.body);
             
             let colletion;
             req.body.estado == 'ocupado' ? colletion = "ingresos" : colletion = "reservas"

             let query             = { habitacion : req.body.habitacion}
             let { db, conection } = await mongo();

             try {
                  await db.collection(colletion).insertOne(req.body);
                  await db.collection("habitaciones").findOneAndUpdate(query,{ $set: { estado: req.body.estado}});
                  res.status(200).send({ error: false });
                 } 
             catch (err) {
                  console.log(err);
                  
                  res.status(400).send({ error: true });
             } 
             conection.close();
});

router.get("/get/:tipo", async (req, res) => {
            let { db, conection } = await mongo();
            try {
                 let data = await db.collection(req.params.tipo).find().toArray();
                 res.status(200).send(data);
            } catch (err) {
                 console.log(err);
                 res.status(400).send({ error: true });
            }
            conection.close();

});

router.get("/get/:habitacion/:tipo", async (req, res) => {
            let { db, conection } = await mongo();
            let query             = [{ habitacion:req.params.habitacion },{ finalizado: false }];
            try {
                 let data = await db.collection(req.params.tipo) .find({ $and: query }) .toArray();
                 res.status(200).send(data);
            } 
            catch (err) {
                 console.log(err);
                 res.status(400).send({ error: true });
            }
            conection.close();
});

router.put("/salida", async (req, res) => {
            let { db, conection } = await mongo();
            try {
                 await db.collection("ingresos").findOneAndUpdate(
                                                                  { _id: ObjectId(req.body._id) },
                                                                  { $set: { fechaSalida: req.body.fecha, finalizado: true } }
                                                                 );
                 await db.collection("habitaciones").findOneAndUpdate( 
                                                                      { habitacion : req.body.habitacion},
                                                                      { $set: { estado : "disponible" } }
                                                                     );
                 res.status(200).send({ error: false });
            } 
            catch (err) {
                 console.log(err);
                 res.status(400).send({ error: true });
            }
            conection.close();
});

router.put("/reserva", async (req, res) => {
            let estado;
            req.body.reserva ?  estado = "ocupado" : estado = "disponible"
            let { db, conection } = await mongo();
            try {
                 await db.collection("reservas").findOneAndUpdate(
                                                    { _id: ObjectId(req.body._id) },
                                                    { $set: { reserva: req.body.reserva , finalizado : !req.body.reserva} }
                                                  );
                 await db.collection("habitaciones").findOneAndUpdate(
                                                       {habitacion  : req.body.habitacion},
                                                       { $set: { estado : estado } }
                                                      );
                 if(req.body.reserva) {
                     delete req.body._id
                     await db.collection("ingresos").insertOne(req.body)
                 }                                 
                 res.status(200).send({ error: false });
            } 
            catch (err) {
                 console.log(err);
                 res.status(400).send({ error: true });
            }
            conection.close();
});

module.exports = router;
