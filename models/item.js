const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
  {
    itemName: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    itemType: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('items', Item)
