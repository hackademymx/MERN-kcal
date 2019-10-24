const expres = require('express')
const router = expres.Router()

const foodTypes = require('./foodTypes')
const mealTypes = require('./mealTypes')
const meal = require('./meal')

module.exports = app => {
  router.get('/', (req, res) => {
    res.send(`Hola Hackademy desde Express!`)
  })

  router.post('/catalogs/foodTypes', foodTypes.addFoodType)
  router.get('/catalogs/foodTypes', foodTypes.getFoodTypes)

  router.post('/catalogs/mealTypes', mealTypes.addMealType)
  router.get('/catalogs/mealTypes', mealTypes.getMealTypes)

  router.post('/meals', meal.addMeal)
  router.get('/meals', meal.getMeals)
  router.get('/meals/:uuid', meal.getMealById)
  router.patch('/meals/:uuid', meal.updateMeal)
  router.delete('/meals/:uuid', meal.deleteMeal)

  app.use('/api', router)
}