import express from "express";
import { checkLogin } from "../middlewares/checkLogin.js";
import logoutController from "../controllers/logoutController.js";

const router = express.Router();

router.delete("/", checkLogin, logoutController);

export default router;
