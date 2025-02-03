import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    default: 0,
    required: true,
  },
  following: {
    type: Number,
    default: 0,
    required: true,
  },
  presentJobTitle: {
    type: String,
    required: true,
  },
  presentJobCompany: {
    type: String,
    required: true,
  },
  formerJobCompany: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
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
});

export default ProfileSchema;
