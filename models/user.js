const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// same thing like this
// The Schema if mongoose will be pass to a variable with the same name 
const { Schema } = mongoose


const userSchema = new Schema({
    // name of the attribute and the type of it
    googleId: String,
    name: String,
    lastName: String,
    // email: String
})

mongoose.model('users', userSchema)