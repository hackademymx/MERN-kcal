const expres = require('express')
const router = expres.Router()

module.exports = app => {
  router.get('/', (req, res) => {
    res.send(`Hola Hackademy desde Express!`)
  })

  app.use('/api', router)
}