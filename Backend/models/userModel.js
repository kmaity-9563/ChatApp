// useColorModel - name , mobileNumber , password , pic

// import { Document, Schema, model, Query, Model } from "mongoose";
const mongoose = require("mongoose");
const { Schema } = mongoose;


const userModel = new Schema(
  {
    name: {
      type: String, required: true 
    },
    emailId: {
      type: String,  required: true ,
      unique: true
      // validate: {
      //   validator: function (value) {
      //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      //   },
      //   message: "invalid email address",
      // },
    },
    password: {
      type: String,  required: true
    },
    // displayPicture: {
    //   // type: "string",
    //   default:
    //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    // },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user' , userModel);

module.exports = User;
