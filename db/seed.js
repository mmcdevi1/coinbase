const User = require('../models/User')

User
	.create({
		firstName: 'Michael',
		lastName: 'McDevitt',
		email: 'mmcdevi1@gmail.com',
		username: 'mmcdevi1',
		password: 'koplop'
	})
	.then(user => {
		console.log('User created')
	})
	