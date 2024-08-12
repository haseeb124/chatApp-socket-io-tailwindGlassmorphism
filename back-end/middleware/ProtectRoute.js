import UserModel from "../models/user.model.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';

export const ProtectRoute = async(req, res, next) => {
  try {
    
    const token = req.cookies.jwt;
    
    
    if(!token){
      return next(new ErrorHandler("token not found", 404))
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
      return next(new ErrorHandler("Invalid token", 400))
    }

    const userId = decoded.userId;

    const getUser = await UserModel.findById(userId);

    if(!getUser){
        return next(new ErrorHandler("something went wrong while fetching user", 400))
    }

    req.user = getUser;

    next();
    
  } catch (error) {
    console.log(error)
  }
}

