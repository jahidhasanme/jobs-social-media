import express from "express";
import {
  createPost,
  deletePost,
  getPaginatedPosts,
  getPosts,
  updatePost,
} from "../controllers/postsController.js";
import { checkLogin } from "../middlewares/checkLogin.js";
import {
  doPostsValidationHandler,
  doPostsValidators,
} from "../middlewares/postsValidators.js";
const router = express.Router();

router.get("/", checkLogin, getPosts);
router.get("/", checkLogin, getPaginatedPosts);
router.post(
  "/",
  checkLogin,
  doPostsValidators,
  doPostsValidationHandler,
  createPost,
);
router.put(
  "/",
  checkLogin,
  doPostsValidators,
  doPostsValidationHandler,
  updatePost,
);
router.post("/", checkLogin, createPost);
router.put("/", checkLogin, updatePost);
router.delete("/", checkLogin, deletePost);

export default router;
