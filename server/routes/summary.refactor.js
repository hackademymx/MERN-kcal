const { Meal } = require('../models/meal')
const { FoodType } = require('../models/foodType')

// **** Refactor ***
const lookup = {
  from: 'foodtypes',
  localField: 'foods',
  foreignField: '_id',
  as: 'foods'
}

// https://scotch.io/bar-talk/javascripts-three-dots-spread-vs-rest-operators543
// Rest parameters
const idGroup = (...args) => {
  let days = {}

  for (let arg of args) {
    days[arg] = { [`$${arg}`]: '$date' }
  }

  return days
}

const group = (...args) => ({
  _id: idGroup(...args),
  calories: { $push: '$foods.kcal' },
  quantityMeals: { $sum: 1 }
})

const sort = {
  '_id.year': -1,
  '_id.month': -1,
  '_id.dayOfMonth': -1
}

const flatten = items => items.reduce((a, b) => a.concat(b), [])
const sumKcals = item => item.reduce((total, value) => total + value, 0)

const totalKcals = kcals => {
  const flattenKcals = flatten(kcals)
  return sumKcals(flattenKcals)
}

const transformData = data => {
  return data.map(item => {
    return {
      dia: item._id.dayOfMonth,
      mes: item._id.month,
      año: item._id.year,
      totalKcal: totalKcals(item.calories),
      quantityMeals: item.quantityMeals
    }
  })
}

exports.getByYear = async (req, res) => {
  try {
    const data = await Meal.aggregate([
      { $lookup: { ...lookup } },
      { $group: group('year') },
      { $sort: sort }
    ])

    res.send(transformData(data))
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getByMonth = async (req, res) => {
  try {
    const data = await Meal.aggregate([
      { $lookup: { ...lookup } },
      { $group: group('month', 'year') },
      { $sort: sort }
    ])

    res.send(transformData(data))
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getByDay = async (req, res) => {
  try {
    const data = await Meal.aggregate([
      { $lookup: { ...lookup } },
      { $group: group('dayOfMonth', 'month', 'year') },
      { $sort: sort }
    ])

    res.send(transformData(data))
  } catch (error) {
    res.status(500).send(error)
  }
}



