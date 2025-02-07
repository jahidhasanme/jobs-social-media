import express from "express";
import editUser from "../controllers/editUserController.js";
const router = express.Router();

router.put("/", editUser);

export default router;
