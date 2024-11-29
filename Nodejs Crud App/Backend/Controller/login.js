const express = require("express")
const login = express.Router()
const schema =require("../models/schema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

login.post("/",async(req,res)=>{
     try{
        const email = await schema.findOne({Email:req.body.Email})
        if(!email) return res.json({message:`user email not found`}) 
            const password = await bcrypt.compare(req.body.Password, email.Password)
        if(!password) return res.json({message:"User Password Incorrect"})
            const Hello = jwt.sign({_id: email._id,Email:email.Email},"AMAN@tokenKey")
        res.cookie('Token',Hello,{httpOnly:true,secure:false,maxAge:500000})
        res.json({
            message:email,
            msg:`Login Attemt`,
            Token:Hello
        })
    }catch (error){
    res.json({message:`Something Went Wrong ${error}`})
    }
})

module.exports = login