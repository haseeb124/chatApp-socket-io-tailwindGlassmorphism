import { catchAsyncError } from "../middleware/catchAsyncError.js";
import UserModel from "../models/user.model.js";

const getUsers = catchAsyncError( async( req, res, next) => {

  const loggedInUserId = req.user._id;

  const findUsers = await UserModel.find({_id: {$ne: loggedInUserId}}).select("-password");

  return res.status(200)
  .json({findUsers});

});

export {
  getUsers
}