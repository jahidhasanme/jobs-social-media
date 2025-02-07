import mongoose from "mongoose";
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  position: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  category: {
    type: String
  }
});

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String
  },
  followers: {
    type: Number,
    default: 0,
  },
  following: {
    type: Number,
    default: 0,
  },
  currentJob: JobSchema,
  formerJob: JobSchema,
  category: {
    type: Array
  },
  skills: {
    type: Array
  },
  interestedCountries: {
    type: Array
  },
  major: {
    type: String
  },
  university: {
    type: String
  },
  graduationYear: {
    type: Number
  },
  college: {
    type: String
  },
  school: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "employer"],
    default: "user",
    required: true,
  },
  address: {
    type: String,
  },
  facebook: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  website: {
    type: String,
  },
  twitter: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default UserSchema;
