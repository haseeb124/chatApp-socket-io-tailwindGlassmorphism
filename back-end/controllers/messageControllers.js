import mongoose from "mongoose";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import conversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";





const sendMessage = catchAsyncError(async (req, res, next) => {

    const {message} = req.body;

    const {id: receiverId} = req.params;
    
    const senderId = req.user._id;
  

    let conversation = await conversationModel.findOne({
      participants: {$all: [senderId, receiverId]}
    });

    // console.log("convSend", conversation);

    if(!conversation){
      conversation = new conversationModel({
        participants: [senderId, receiverId]
      });
    }

    const newMessage = new messageModel({
      senderId,
      receiverId,
      message
    });

    if(newMessage){
      conversation.messages.push(newMessage._id)
    }

    // await newMessage.save();
    // await conversation.save();

    await Promise.all([conversation.save(), newMessage.save()])

    //socket functionality

    const receiverSocketId = getReceiverSocketId(receiverId);
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage", newMessage)
    }

    return res.status(201)
    .json({newMessage});

});

const getMessage = catchAsyncError( async (req, res, next) => {

      const {id: receiverId} = req.params;

      // const receiverObjId = new mongoose.Types.ObjectId(receiverId)
      
      const senderId = req.user._id;
      
      
      const conversation = await conversationModel.findOne({
        participants: {$all : [senderId, receiverId]}
      }).populate("messages")

      
    
      if(!conversation){
        return res.status(200).json([]);
      }

      const messages = conversation.messages;

      return res.status(200)
      .json(messages)


});



export {
  sendMessage,
  getMessage
}