// useColorModel - name , mobileNumber , password , pic
import mongoose from "mongoose";

const userModel = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    mobileNumber: {
      type: "number",
      required: true,
    },
    emailId: {
      type: "string",
      required: false,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "invalid email address",
      },
    },
    password: {
      type: string,
      required: true,
    },
    displayPicture: {
      type: string,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps : true,
  }
);

const user = mongoose.model('user' , userModel);
