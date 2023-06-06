// Chatmodel - chatName , isGroupchat , users(usr) ,latestmssage(message) , groupadmin(user),timestamps

import { default as mongoose } from "mongoose";

const chatSchema = new mongoose.Schema(
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

export default chat;
