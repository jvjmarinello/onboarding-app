import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  aboutMe: {type: String},
  birthdate: {type: String},
  street: {type: String},
  city: {type: String},
  state: {type: String},
  zip: {type: String},
  lastStepSubmitted: {type: Number},
  creationDate: {type: Date, default: new Date},
});

const User = mongoose.model('User', UserSchema);

export default User;