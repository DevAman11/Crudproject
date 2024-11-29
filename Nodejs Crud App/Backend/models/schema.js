const mongoose = require("mongoose")
const schema = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    Token:{
        type:String,
        require:true
    },
    Path:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
})
module.exports = mongoose.model("PracData",schema)