import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema({

  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      default: []
    }
  ]

}, {timestamps: true})

const conversationModel = mongoose.model("Conversation", conversationSchema);

export default conversationModel;