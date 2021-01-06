const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Size = new Schema(
  {
    mushroom: { type: String, required: true },
    microgreen: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('sizes', Size)