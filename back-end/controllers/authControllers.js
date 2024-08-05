import {catchAsyncError} from '../middleware/catchAsyncError.js';
import ErrorHandler from '../utils/errorHandler.js';
import UserModel from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import genTokenAndsetCookies from '../utils/genToken.js';

const UserSignup = catchAsyncError(async ( req, res, next ) => {

    const {fullName, username, password, confirmPassword, gender} = req.body
  
    if(password !== confirmPassword){
      return next(new ErrorHandler("password do not match", 400))
    }

    const user = await UserModel.findOne({username});

    if(user){
      return next(new ErrorHandler("username alreay taken", 400))
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    let newUser = new UserModel({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic : gender === "male" ? boyProfilePic : girlProfilePic
    })

    
    if(newUser){
      
      await newUser.save();

      newUser.password = undefined;

      genTokenAndsetCookies(newUser._id, res);

      return res.status(201).json({user: newUser})
    } else {
      return new ErrorHandler("invalid user data", 404)
    }
}) ;

const userLogin = catchAsyncError(async (req, res, next) => {

  const {username, password} = req.body;

  let user = await UserModel.findOne({username})
  
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if( !user || !isPasswordCorrect ){
    return next(new ErrorHandler("username or password invalid", 404))
  }

  user.password = undefined;

  genTokenAndsetCookies(user._id, res);

  return res.status(200)
  .json({user});


});

const userLogout = catchAsyncError(async (req, res, next) => {
      res.cookie("token", "", {maxAge: 0});

      return res.status(200)
      .json({message: "user logged out successfully"})
});




export {
  UserSignup,
  userLogin,
  userLogout
}