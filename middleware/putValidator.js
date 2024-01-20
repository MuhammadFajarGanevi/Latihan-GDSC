const _ = require('lodash')


function putValidator (request, response, next){
    const cekBodyTitle = request.body.title

    if (!_.isEmpty(cekBodyTitle)){
        next()
    }else{
        let error = new Error("Your Title is not validated")
        return response.status(400).json({ error: error.message });
    }
}
module.exports ={putValidator}