const { FoodType } = require('../models/foodType')
const foodTypes = require('../data/foodTypes.json')


exports.addFoodType = async (req, res) => {
  try {
    const data = await FoodType.insertMany(foodTypes)
    res.send(data)
  } catch(error) {
    res.status(400).send(error)
  }
}

exports.getFoodTypes = async (req, res) => {
  try {
    const data = await FoodType.find()

    res.send(data)
  } catch (error) {
    res.status(400).send(error)
  }
}