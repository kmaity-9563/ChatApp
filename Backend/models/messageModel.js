// messageModel - sender , content , chat, timestamps

import { schema, model } from "mongoose";

const messageSChemas = new schema(
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

export default message;
