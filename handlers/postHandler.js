const {Router} = require('express')
const {getRandomInt} = require('.././utils/randomNumber.js')
const {postValidator} = require('../middleware/postValidator.js')
const {putValidator} = require('../middleware/putValidator.js')
const posts = []

/**
 * 
 * @param {Router} router 
 */



function setupPostHandler(router){

    // Method Post
    router.post('/', postValidator, (request, response) => {
 
    posts.push({
      "id": getRandomInt(99999),
      "title": request.body.title,
      "text": request.body.text,
      "created_at": request.requestTime
    })
  
    response.json({
      "Message": "Success"
    })
  })

  //Method Get
  router.get('/', (request, response) => {
  
      response.json({
          "data": posts
        })
  })
  
  
  // Method Put
  router.put('/:postId', putValidator, (request, response) => {
  
    for(let i = 0; i < posts.length; i++) {
      if(posts[i].id == request.params.postId) {
          posts[i].title = request.body.title
  
          response.send(JSON.stringify({
              status: true,
              message: "berhasil update data"
          }))
          return 
      }
     }
  
     response.json({
      "message": `title with id ${request.params.postId} is not found`
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