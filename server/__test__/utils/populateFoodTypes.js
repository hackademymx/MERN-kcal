const { FoodType } = require('../../models/foodType')
const foodTypes = require('../../data/foodTypes.json')

const populateFoodtypes = (done) => {
  FoodType.deleteMany({}).then(() => {
    return FoodType.insertMany(foodTypes)
  }).then(() => done())
}

module.exports = { populateFoodtypes }
