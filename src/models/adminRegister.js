const mongoose = require('mongoose')
mongoose.connect('xxxxxxxxxxx')
const Schema = mongoose.Schema
const registerSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"loginTable"},
    fullName:{type:String},
    mobileNumber:{type:String},
    password:{type:String}
})
var registerTable = mongoose.model('registerTable',registerSchema)
module.exports = registerTable