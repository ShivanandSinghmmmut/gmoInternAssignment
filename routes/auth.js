const express = require("express");
const router = express.Router();
const userDetails = require("../model/userSchema")


router.get("/",(req, res)=>{
    res.send("hello guys welcome to my youtube channel")
})

router.post("/register",(req,res)=>{
    const {name, phone, email} = req.body;
    if(!name||!phone||!email){
        return  res.status(432).json({error:"plz fill the filled properly"})
    }

    const user = new userDetails({name,phone,email})
    console.log(user)
    user.save().then(()=>{
        console.log("user saved successfully")
        res.status(201).send(user)
    }).catch((err)=>{
        console.log(err)
        res.status(404).send(err)
    })
})

module.exports = router;