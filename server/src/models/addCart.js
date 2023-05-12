const mongoose = require('mongoose')
mongoose.connect('xxxxxxxxxxx')
const Schema = mongoose.Schema
const cartSchema = new Schema({
    cartId:{type:Schema.Types.ObjectId,ref:"productTable"},
})
var cartTable = mongoose.model('cartTable',cartSchema)
module.exports = cartTable