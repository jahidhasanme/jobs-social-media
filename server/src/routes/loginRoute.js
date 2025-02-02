import express from "express";
import loginController from "../controllers/loginController.js";
import {
  doLoginValidationHandler,
  doLoginValidators,
} from "../middlewares/loginValidators.js";

const router = express.Router();

router.post("/", doLoginValidators, doLoginValidationHandler, loginController);

export default router;
