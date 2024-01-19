const {Router} = require('express')
const {setupPostHandler} = require('./postHandler.js')
/**
 * 
 * @param {Router} router 
 */

function setupHandler(router) {

    router.use('/post', setupPostHandler(router))
    return router
}

module.exports = {setupHandler}