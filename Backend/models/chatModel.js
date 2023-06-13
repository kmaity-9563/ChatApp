// Chatmodel - chatName , isGroupchat , users(usr) ,latestmssage(message) , groupadmin(user),timestamps

const mongoose = require("mongoose");
const { Schema } = mongoose;


const chatSchema = new Schema(
  {
    chatName: {
      type: "string",
      trim: true,
    },
    isGroupchat: {
      type: "boolean",
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    lastMassage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
    groupadmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },

  {
    timestamps: true,
    autoIndex: true,
  }
);

const chat = mongoose.model("chat", chatSchema);

module.exports = chat;
