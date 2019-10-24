const { Meal } = require('../models/meal')
const { FoodType } = require('../models/foodType')

const sumKcals = item => item.reduce((total, value) => total + value, 0)

const totalKcals = kcals => {
  const flatKcals = kcals.flat()
  return sumKcals(flatKcals)
}

exports.getByYear = async (req, res) => {
  try {
    const data = await Meal.aggregate([
      {
        $lookup: {
          from: 'foodtypes',
          localField: 'foods',
          foreignField: '_id',
          as: 'foods'
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' }
          },
          calories: { $push: '$foods.kcal' },
          quantityMeals: { $sum: 1 }
        }
      },
      {
        $sort: {
          '_id.year': -1
        }
      }
    ])
  
    const newData = data.map(({ _id, calories, quantityMeals}) => {
      // console.log("TCL: exports.getByYear -> item", item)
      return {
        day: _id.dayOfMonth,
        month: _id.month,
        year: _id.year,
        totalKcal: totalKcals(calories),
        quantityMeals
      }
    })

    res.send(newData);

  } catch(error) {
    res.status(500).send(error)
  }
}

exports.getByMonth = async (req, res) => {
  try {
    const data = await Meal.aggregate([
      {
        $lookup: {
          from: 'foodtypes',
          localField: 'foods',
          foreignField: '_id',
          as: 'foods'
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' }
          },
          calories: { $push: '$foods.kcal' },
          quantityMeals: { $sum: 1 }
        }
      },
      {
        $sort: {
          '_id.year': -1,
          '_id.month': -1
        }
      }
    ])

    const newData = data.map(({ _id, calories, quantityMeals }) => {
      // console.log("TCL: exports.getByYear -> item", item)
      return {
        day: _id.dayOfMonth,
        month: _id.month,
        year: _id.year,
        totalKcal: totalKcals(calories),
        quantityMeals
      }
    })

    res.send(newData);

  } catch (error) {
    res.status(500).send(error)
  }
}

exports.getByDay = async (req, res) => {
  try {
    const data = await Meal.aggregate([
      {
        $lookup: {
          from: 'foodtypes',
          localField: 'foods',
          foreignField: '_id',
          as: 'foods'
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' },
            dayOfMonth: { $dayOfMonth: '$date' }
          },
          calories: { $push: '$foods.kcal' },
          quantityMeals: { $sum: 1 }
        }
      },
      {
        $sort: {
          '_id.year': -1,
          '_id.month': -1,
          '_id.dayOfMonth': -1
        }
      }
    ])

    const newData = data.map(({ _id, calories, quantityMeals }) => {
      // console.log("TCL: exports.getByYear -> item", item)
      return {
        day: _id.dayOfMonth,
        month: _id.month,
        year: _id.year,
        totalKcal: totalKcals(calories),
        quantityMeals
      }
    })

    res.send(newData);

  } catch (error) {
    res.status(500).send(error)
  }
}