const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }
})


const userDetails = new mongoose.model("USERDETAILS",userSchema);
module.exports = userDetails;