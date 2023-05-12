const mongoose = require('mongoose')
mongoose.connect('xxxxxxxxxxx')
const Schema = mongoose.Schema
const productSchema = new Schema({
    productName:{type:String},
    productDetails:{type:String},
    profileImg:{type:String},
    productPrice:{type:String},
    totalStocks:{type:String}
})
var productTable = mongoose.model('productTable',productSchema)
module.exports = productTable