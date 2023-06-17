const asyncHandler = require('express-async-handler');
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')
const jwtToken = require('../config/generatToken')
// const { error } = require("console");

const registerUser = asyncHandler( async (req, res ,next) => {
  // console.log(req.body);
  const user = {
    name  : req.body.name,
    password : req.body.password,
    email : req.body.email ,
  }
  // res.status(200).json({"done" : "ohhh yeahhh... bho.."});

  console.log(user);
  // checking that user has filled all details or not
  if (  !user.name || !user.email || !user.password ) {
    res.status(400) ;
    throw new Error("Please Enter all the Feilds");
    // throw new Error("enter all fields");
  }
  //  if exists show allready registerd
  // const userExists = userModel.findOne({email: user.email});

  // if (userExists) {
    // res.status(400);
    // throw new Error("User already exists");
    // throw new Error( Error ,"User alr  eady exists");
  // }

  //   if doesn't exists then create one
  const User = await userModel.create({
    name : String ,
    email : String,
    password : String,
    // displayPicture,
  });
  const jwtToken =  (User) => {
    const Token =  jwt.sign({UserId : User._id}, 'shhhhh' , {expiresIn : "30d" })
    return Token ;
}
  if (User) {
    res.status(201).json({
      _id : User._id,
      name: User.name,
      password: User.password,
      email: user.email,
      // displayPicture: user.displayPicture,
      Token : jwtToken(User._id)
    });
  } else {
    res.status(400).json({ "user not found": error });
  }
})
;

module.exports = { registerUser: registerUser };
