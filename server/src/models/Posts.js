import mongoose from "mongoose";
import PostsSchema from "../schemas/Posts.js";

const Posts = mongoose.model("Posts", PostsSchema);

export default Posts;
