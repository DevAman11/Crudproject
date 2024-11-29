const express = require("express")
const router = express.Router()
const schema = require("../models/schema")
const jwt = require("jsonwebtoken")
const joi = require("joi")

router.get("/jwt", (req,res)=>{
    try {
    const Token = jwt.sign({id:123456987},"AMAN@tokenKey")
        res.send(Token)
    } catch (error) {
        console.log(error);
        
    }    
})
router.post("/", async(req,res)=>{
    const {Name,Phone,Email,Password} = req.body
    const JoiData = await joi.object({
        Name:joi.string().required(),
        Phone:joi.string().min(10).required(),
        Email:joi.string().email().required(),
        Password:joi.string().min(6).max(16).required()
    })
   const HashPass = await bcrypt.hash(Password,10)
   const phoneValidator = await schema.findOne({Phone})
   if(!phoneValidator){
    res.status(400).json({msg:"Phone Number Already Exist"})
   }
   const emailValidator = await schema.findOne({Email})
   if(!emailValidator){
    res.status(400).json({msg:"Email Already Exist"})
   }
   try {
    const {error,value} = JoiData.validate({Name,Phone,Email,Password})
    if(error){
        res.status(400).json({msg:error.details[0].message})
    }
    const newUser = new schema(value)
    const Savedata = await newUser.save()
    res.status(201).json({data:Savedata,msg:"Data Saved SuccessFully"})
   } catch (error){
    console.log(error);
   }
})

router.get("/",async (req,res)=>{
    try {
    const GetData = await schema.find({})
    res.send(GetData)
    } catch (error) {
        console.log(error);
        
    }
})

router.get("/:Name", async (req,res)=>{
    const Name = req.params.Name
    const Finduser= await schema.findOne({Name})
    try {
        res.send(Finduser)
    } catch (error) {
        console.log(error);
    }
})

router.patch("/:id", async (req,res)=>{
    const id = req.params.id
    const update = await schema.updateOne(
        {_id:id},
        {$set:req.body}
    )
    try {
        res.send(update)
    } catch (error) {
        console.log(error);
    }
})

router.delete("/:id", async (req,res)=>{
    const id = req.params.id
    const update = await schema.deleteOne(
        {_id:id}
    )
    try {
        res.send(update)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
