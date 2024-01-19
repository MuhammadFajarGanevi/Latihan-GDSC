const express = require('express') /* mengambil module express*/
const app = express() /* memanggil function yang ada di express*/
const router = express.Router()
const port = 3000
const bodyParser = require('body-parser')
const {setupHandler} = require('./handlers/routes.js')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', setupHandler(router))

const posts = []

// Routes / URL / endpoint  utama method GET , pengambilaan path awal
//Method Get

  

// untuk ngerunning express
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
