const mongoose = require('mongoose')
mongoose.connect('xxxxxxxxxxx')
const Schema = mongoose.Schema
const loginTableSchema = new Schema({
    mobileNumber:{type:String},
    password:{type:String}
})
var loginTable = mongoose.model('loginTable',loginTableSchema)
module.exports = loginTable