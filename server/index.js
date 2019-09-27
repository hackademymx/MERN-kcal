require('./config/config')

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const { mongoose } = require('./db/mongoose')


const app = express()
const port = process.env.PORT

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

const routes = require('./routes')

routes(app)

app.listen(port, err => {
  if (err) {
    return console.log('Ocurrio un error', err)
  }

  console.log(`http://localhost:${port}`)
})
