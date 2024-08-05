import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({

  senderId :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  message: {
    type: String,
    required: true,
  }

}, {timestamps: true});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;