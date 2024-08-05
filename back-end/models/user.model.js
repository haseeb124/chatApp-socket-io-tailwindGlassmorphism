import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  profilePic : {
    type: String,
    default: ""
  }
    

}, {timestamps: true});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;

