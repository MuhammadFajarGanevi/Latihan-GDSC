const {Router} = require('express')
const {getRandomInt} = require('.././utils/randomNumber.js')
const posts = []

/**
 * 
 * @param {Router} router 
 */



function setupPostHandler(router){

    // Method Post
    router.post('/', (request, response) => {
 
    posts.push({
      "id": getRandomInt(20),
      "username": request.body.username,
      "password": request.body.password
    })
  
    response.json({
      "Message": "Success"
    })
  })

  //Method Get
  router.get('/', (request, response) => {
    response.json({
      "message": "this is home path"
    })
  })
  
  router.get('/', (request, response) => {
  
      console.log(request.params, request.query)
      response.json({
          "data": posts
        })
  })
  
  
  // Method Put
  router.put('/:postId', (request, response) => {
    console.log({updateData: request.body})
  
    
    for(let i = 0; i < posts.length; i++) {
      if(posts[i].id == request.params.postId) {
          posts[i].username = request.body.username
  
          response.send(JSON.stringify({
              status: true,
              message: "berhasil update data"
          }))
          return 
      }
     }
  
     response.json({
      "message": `username with id ${request.params.postId} is not found`
    })
  })
  
  
  // Method Delete
  router.delete('/:postId', (request,response) =>{
      
      console.log(request.params.postId)
  
      for(let i = 0; i < posts.length; i++) {
          if(posts[i].id == request.params.postId) {
              posts.splice(i, 1)
  
              response.send(JSON.stringify({
                  status: true,
                  message: "berhasil delete data"
              }))
              return 
          }
      }
  
    response.json({
      "message": `Post with id ${request.params.postId} is not found`
    })
  })

return router
}

module.exports = {setupPostHandler}