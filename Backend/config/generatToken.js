const jwt = require('jsonwebtoken')
const User = require('../controller/userController')
const genaratToken =  (User) => {
            const Token =  jwt.sign({UserId : User._id}, 'shhhhh' , {expiresIn : "30d" })
            return Token ;
}

exports.module = { genaratToken}