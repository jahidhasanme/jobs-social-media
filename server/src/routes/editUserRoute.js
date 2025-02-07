import express from "express";
import editUser from "../controllers/editUserController.js";
import { checkLogin } from "../middlewares/checkLogin.js";
const router = express.Router();

router.put("/", checkLogin, editUser);

export default router;
