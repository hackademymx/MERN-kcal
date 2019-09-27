const mongoose = require('mongoose')
const { v4 } = require('uuid')

// SCHEMA
const MealTypeSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: v4
  },
  value: {
    type: String
  }
}, { timestamps: true })

const MealType = mongoose.model('MealType', MealTypeSchema)

module.exports = { MealType }