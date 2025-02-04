import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  likeCount: {
    type: Number,
    required: true,
  },
  comments: {
    type: Number,
    required: true,
  },
  share: {
    type: Number,
    required: true,
  },
});

export default PostsSchema;
