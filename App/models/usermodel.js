const mongoose = require('mongoose')

const { Schema, model} = mongoose

const UserSchema = new Schema({
    email : String,
    password : String
    
}, {timeStamps:true})

const User = model("User", UserSchema)

module.exports = User