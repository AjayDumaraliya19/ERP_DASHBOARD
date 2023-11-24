import mongoose from "mongoose";

/* ------------------------ Create User model Schema ------------------------ */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      min: 2,
      max: 100,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      max: 50,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 5,
      required: true,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transaction: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
