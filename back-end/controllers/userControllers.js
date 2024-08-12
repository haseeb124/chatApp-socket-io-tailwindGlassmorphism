import { catchAsyncError } from "../middleware/catchAsyncError.js";
import UserModel from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";

const getUsers = catchAsyncError( async( req, res, next) => {

  const loggedInUserId = req.user._id;

  const findUsers = await UserModel.find({_id: {$ne: loggedInUserId}}).select("-password");
  
  
  if(!findUsers) {
    return next(new ErrorHandler("User not found", 404))
  }

  return res.status(200)
  .json({findUsers});

});

export {
  getUsers
}