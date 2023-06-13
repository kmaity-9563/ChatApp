// messageModel - sender , content , chat, timestamps

const mongoose = require("mongoose");
const { Schema } = mongoose;


const messageSChemas = new Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    content: {
      type: string,
      required: true,
      trim: true,
      minLength: 1,
      maxlength: 255,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chat",
    },
  },

  {
    timestmaps: true,
  }
);

const message = model("Message", messageSChemas);

module.exports = message;
