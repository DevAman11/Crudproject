const express = require("express")
const App = express()
const cors = require("cors")
const env = require("dotenv")
const mongoose = require("mongoose")
const router = require("../Backend/Controller/routes")

env.config()
App.use(express.json())
App.use(cors())
App.use("/Crud",router)
App.use("/login",router)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Server Connected");
}


App.listen(7000,()=>{
    console.log("Server Started");
    
})