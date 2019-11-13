const router = require("express").Router();
const mongo = require("./../mongo")
const { ObjectId } = require("mongodb");


router.get("/get", async (req, res) => {
    let { db, conection } = await mongo()
    try {
        let data = await db.collection('habitaciones').find().toArray()
        res.status(200).send(data)
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ error: true })
    }
    conection.close()
})


module.exports = router