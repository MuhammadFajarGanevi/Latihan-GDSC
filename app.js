const express = require('express') /* mengambil module express*/
const app = express(); /* memanggil function yang ada di express*/
const port = 3000;
const bodyParser = require('body-parser')

const posts = []

app.use(bodyParser.json())

// Routes / URL / endpoint  utama method GET , pengambilaan path awal
app.get('/', (request, response) => {
  response.json({
    "message": "this is home path"
  })
})

// Yang diatas disebut endpoint, request dan response disebut callback
app.get('/tes2', (request, response) => {
  response.send("Hello mang")
})

// Method Post
app.post('/post', (request, response) => {
 

  posts.push({
    "title": request.body.title,
    "description": request.body.description
  })

  console.log({requestFromOutside : request.body})  
  response.send('Login Berhasil')
})

// Method Put
app.put('/update', (request, response) => {
  console.log({updateData: request.body})
  response.send('Update berhasil')
})


app.delete('/delete', (request,response) =>{
  response.send('Delete berhasil')
})
// untuk ngerunning express
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
