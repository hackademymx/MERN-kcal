require('./config/config')

const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes')

routes(app)

app.listen(port, err => {
  if (err) {
    return console.log('Ocurrio un error', err)
  }

  console.log(`http://localhost:${port}`)
})
