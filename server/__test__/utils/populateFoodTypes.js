const { FoodType } = require('../../models/foodType')
const foodTypes = require('../../data/foodTypes.json')

const populateFoodTypes = (done) => {
  FoodType.deleteMany({}.then(() => {
    return FoodType.insertMany(foodTypes)
  }).then(() => done()))
}

module.exports = { populateFoodTypes };