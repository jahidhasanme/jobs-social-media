import express from "express";
import {
  createPost,
  deletePost,
  getPaginatedPosts,
  getPosts,
  updatePost,
} from "../controllers/postsController.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/", getPaginatedPosts);
router.post("/", createPost);
router.put("/", updatePost);
router.delete("/", deletePost);

export default router;
