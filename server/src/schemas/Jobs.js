import mongoose from "mongoose";
import User from "../models/User.js";
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  employer: {
    type: Schema.Types.ObjectId,
    ref: "User",
    validate: {
      validator: async function (value) {
        const user = await User.findById(value);
        return user && user.role === "employer";
      },
      message: "Employer must have a role of employer",
    },
    required: true,
  },
  companyLogo: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
    enum: ["remote", "hybrid", "in person"],
    default: "in person",
  },
  datePosted: {
    type: String,
    required: true,
  },
});

export default JobsSchema;
