const asyncHandler = require('express-async-handler');
const userModel = require("../models/userModel");
const generatToken = require('../config/generatToken')
// const { error } = require("console");

const registerUser = asyncHandler( async (req, res, next) => {
  // res.status(200).json({"done" : "ohhh yeahhh... bho.."});
  // console.log('LOGGED');
  // next();
  const { name, emailId, password, displayPicture } = req.body;
  // checking that user has filled all details or not
  if (!name || !emailId || !password ) {
    res.status(400) ;
    throw new Error("Please Enter all the Feilds");
    // throw new Error("enter all fields");
  }
  //  if exists show allready registerd
  const userExists = userModel.findOne({emailId: emailId});

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
    // throw new Error( Error ,"User alr  eady exists");
  }

  //   if doesn't exists then create one
  const user = await userModel.create({
    name,
    emailId,
    password,
    displayPicture,
  });
  if (user) {
    res.status(201).json({
      _id : user._id,
      name: user.name,
      password: user.password,
      emailId: user.emailId,
      displayPicture: user.displayPicture,
      Token : user.generatToken(user._id)
    });
  } else {
    res.status(400).json({ "user not found": error });
  }
  next();
}
);

module.exports = { registerUser: registerUser };
