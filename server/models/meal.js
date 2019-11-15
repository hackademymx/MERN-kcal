const mongoose = require('mongoose')
const {v4} = require('uuid')

const MealSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: v4
    },
    meal: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodType"
      }
    ],
    mealType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MealType",
      required: true
    }
  },
  { timestamps: true }
);

const Meal = mongoose.model('Meal', MealSchema)
module.exports = {
  Meal
}