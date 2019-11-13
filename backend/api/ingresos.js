const router = require("express").Router();
const mongo = require("./../mongo")
const { ObjectId } = require("mongodb");

router.post("/new", async (req, res) => {
    console.log(req.body);
    
    let { db, conection } = await mongo()
    try {
        await db.collection('ingresos').insertOne(req.body)
        await db.collection('habitaciones')
                          .findOneAndUpdate({_id:ObjectId("5dcbff9a55dd5a2a500214a2"),"habitaciones.habitacion":req.body.habitacion},{$set:{"habitaciones.$.estado":req.body.estado}})
       
        
        res.status(200).send({ error: false })
    }
    catch (err) {
        res.status(400).send({ error: true })
    }
    conection.close()
})

router.get("/get", async (req, res) => {
    let { db, conection } = await mongo()
    try {
        let data = await db.collection('ingresos').find().toArray()
        res.status(200).send(data)
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ error: true })
    }
    conection.close()
})
router.put("/salida", async (req, res) => { 
    let { db, conection } = await mongo()
    try {
        await db.collection('ingresos').findOneAndUpdate({_id:ObjectId(req.body._id)},{$set:{fechaSalida:req.body.fecha}})
        res.status(200).send({error:false})
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ error: true })
    }
    conection.close()
   

})

module.exports = router