const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log("TCL: requestHandler -> request", request.url)
  response.end('Hola hackademy server!')
}

const server = http.createServer(requestHandler)

server.listen(port, err => {
  if (err) {
    return console.log('Algo malo esta pasando', err)
  }

  console.log(`El servidor esta escuchando bajo el puerto ${port}`)
})