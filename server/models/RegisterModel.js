import mongoose from "mongoose";

const RegisterSchema = mongoose.Schema({
  name: String,
  gender: String,
  hobby: [String],
  course: String,
  email: String,
  password: String,
  percentage: Number,
  dob: Date,
});

const RegisterModel = mongoose.model("register", RegisterSchema);

export default RegisterModel;
