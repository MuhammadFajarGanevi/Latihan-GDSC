

    const myLogger = function (request, response, next){
        console.log('IP Request', request.socket.remoteAddress) // untuk mengecek ip yang request
        next()
      }

module.exports = {myLogger}