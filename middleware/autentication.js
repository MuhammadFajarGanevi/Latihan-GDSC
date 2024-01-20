

function authentication(request, response, next) {
	const authheader = request.headers.authorization;
	// console.log(request.headers);

	if (!authheader) {
		let err = new Error('You are not authenticated!');
		response.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}


    const splitAuthenticationHeader = authheader.split(' ')

    console.log(splitAuthenticationHeader)

	if (splitAuthenticationHeader[1] == "password") {
		// If Authorized user
		next();
	} else {
		let err = new Error('You are not authenticated!');
		response.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}


module.exports = { authentication };
