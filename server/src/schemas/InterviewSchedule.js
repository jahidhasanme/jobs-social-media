import mongoose from "mongoose";
import User from "../models/User.js"

const Schema = mongoose.Schema;

const InterviewScheduleSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    validate: {
      validator: async function(value) {
        const user = await User.findById(value);
        return user && user.role === 'employer';
      },
      message: 'Employer must have a role of employer'
    },
    required: true,
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    validate: {
      validator: async function(value) {
        const user = await User.findById(value);
        return user && user.role === 'user';
      },
      message: 'Candidate must have a role of user'
    },
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  interviewLocation: {
    type: String,
    required: true,
    enum: ["online", "offline"],
    default: "online",
  },
  time: {
    type: String,
    required: true,
  },
});

export default InterviewScheduleSchema;
