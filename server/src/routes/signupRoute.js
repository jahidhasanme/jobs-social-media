import express from "express";
import signupController from "../controllers/signupController.js";
import {
  doSignupValidationHandler,
  doSignupValidators,
} from "../middlewares/signupValidators.js";

const router = express.Router();

router.post(
  "/",
  doSignupValidators,
  doSignupValidationHandler,
  signupController
);

export default router;
