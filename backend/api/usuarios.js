const router       = require("express").Router();
const mongo        = require("./../mongo");
const bcrypt       = require("bcrypt");
const jwt          = require("jsonwebtoken");

router.post("/login",async (req,res)=>{
             var token
             let {db,conection} = await mongo()
             try {
                  let usuario = await db.collection("usuarios").find({username:req.body.username}).toArray()
                  if(usuario.length>0){
                     let hash = await bcrypt.compare(req.body.pwd,usuario[0].pwd)
                     
                        if(hash){
                            token = jwt.sign({name: req.body.username, rol: usuario[0].rol},"jwtClave")
                            console.log("token");
                            res.status(200).send({ auth: true, token })
                        }  
                        else res.status(400).send({ error: true })
                     }
                  else res.status(400).send({ error: true })            
             } 
             catch (err) {
                 console.log(err);
                 
                 res.status(400).send({ error: true }) 
             }
             conection.close()
})

router.put("/update",async (req,res)=>{
             let {db,conection} = await mongo()
             let password       = req.body.pwd

             try {
                 let newpwd = await bcrypt.hash(password,10)
                 await db.collection("usuarios").findOneAndUpdate({username:"administrador"},{$set:{pwd:newpwd}})
             res.status(200).send({ error: false })
             } 
             catch (err) {
                res.status(400).send({ error: true }) 
             }
             conection.close()
})

module.exports = router