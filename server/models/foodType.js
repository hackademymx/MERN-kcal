const mongoose = require('mongoose')
const {v4} = require('uuid')

// SCHEMA
const FoodTypeSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: v4
  },
  label: {
    type: String
  },
  kcal: {
    type: Number
  },
  type: {
    type: String
  }
}, { timestamps: true })

const FoodType = mongoose.model('FoodType', FoodTypeSchema)

module.exports = { FoodType }