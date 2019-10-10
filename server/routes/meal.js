const { Meal } = require('../models/meal')
const { FoodType } = require('../models/foodType')
const { MealType } = require('../models/mealType')

exports.addMeal = async (req, res) => {
  console.log("TCL: exports.addMeal -> req", req.body)
  try {
    let foods = []

    await Promise.all(req.body.foods.map(async item => {
      const result = await FoodType.findOne({ uuid: item })
      foods.push(result._id)
    }))

    req.body.foods = foods

    const mealType = await MealType.findOne({ uuid: req.body.mealType})
    req.body.mealType = mealType._id

    const meal = new Meal({
      meal: req.body.meal,
      date: req.body.date,
      foods: req.body.foods,
      mealType: req.body.mealType
    })

    const doc = await meal.save()

    res.send(doc)
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find()
      .populate('mealType')
      .populate('foods')
      .sort('-date')

    res.send(meals)

  } catch (error) {
    res.status(500).send(error)
  }
}