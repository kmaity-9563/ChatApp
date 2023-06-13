const jwt = require('jsonwebtoken')

const genaratToken =  (id) => {
            const Token =  jwt.sign({id}, 'shhhhh' , {expiresIn : "30d" })
            return Token ;
}

exports.module = { genaratToken}