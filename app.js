const express = require('express')
const app = express()
const router = express.Router()
const port = 3000
const bodyParser = require('body-parser')

const { setupHandler } = require('./handlers/routes.js')
const { requestTime } = require('./middleware/cekTime.js')
const { myLogger } = require('./middleware/cekLogged.js')
const {authentication} = require('./middleware/autentication.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Pendaftaran middleware tanpa pemanggilan langsung
app.use(myLogger)
app.use(requestTime)

app.get('/', authentication, (request, response) => {
  response.json({
    "message": "Ini adalah path utama"
  })
})

// Memanggil handler yang berada di luar file
app.use('/', setupHandler(router))

app.listen(port, () => {
  console.log(`Aplikasi contoh berjalan di port ${port}`)
})
