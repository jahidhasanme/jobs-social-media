import express from "express";
import logoutController from "../controllers/logoutController.js";

const router = express.Router();

router.delete("/", logoutController);

export default router;
