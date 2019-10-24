const { Meal } = require('../models/meal')
const { FoodType } = require('../models/foodType')
const { MealType } = require('../models/mealType')

exports.addMeal = async (req, res) => {
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

exports.getMealById = async(req, res) => {
  const { uuid } = req.params
  try {
    const meal = await Meal.findOne({ uuid })
      .populate('foods')
      .populate('mealType')

    if (!meal) return res.status(404).send()

    res.send(meal)
  } catch (error) {
    res.send(505).send(error)
  }
}

exports.updateMeal = async (req, res) => {
  const { params: { uuid }, body } = req
  let foods = []

  try {
    // TODO: Crear TDD para repara este issue
    if (body.foods) {
      await Promise.all(body.foods.map(async (item) => {
        const result = await FoodType.findOne({ uuid: item })
        foods.push(result._id)
      }))

      body.foods = foods
    }

    if (body.mealType) {
      const mealType = await MealType.findOne({ uuid: body.mealType })
      body.mealType = mealType._id
    }

    const meal = await Meal.findOneAndUpdate({ uuid: uuid }, { $set: body }, { new: true })

    if (!meal) {
      return res.status(404).send()
    }

    res.send(meal)
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.deleteMeal = async (req, res) => {
  const { uuid } = req.params
  try {
    const meal = await Meal.findOneAndRemove({ uuid })

    if (!meal) return res.status(404).send()

    res.send(meal)

  } catch(error) {
    res.status(505).send()
  }
}