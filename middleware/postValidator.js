const _ = require('lodash')


function postValidator (request, response, next){
    const cekBodyTitle = request.body.title
    const cekBodyText = request.body.text

    if (!_.isEmpty(cekBodyText) && !_.isEmpty(cekBodyTitle)){
        next()
    }else{
        let error = new Error("Your Title or Text are not validated")
        return response.status(400).json({ error: error.message });
    }
}
module.exports ={postValidator}