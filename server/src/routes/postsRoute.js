import express from "express";
import {
  createPost,
  deletePost,
  getPaginatedPosts,
  getPosts,
  updatePost,
} from "../controllers/postsController.js";
import {
  doPostsValidationHandler,
  doPostsValidators,
} from "../middlewares/postsValidators.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/", getPaginatedPosts);
router.post("/", doPostsValidators, doPostsValidationHandler, createPost);
router.put("/", doPostsValidators, doPostsValidationHandler, updatePost);
router.delete("/", deletePost);

export default router;
