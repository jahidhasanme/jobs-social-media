import express from "express";
import {
  createInterviewSchedule,
  deleteInterviewSchedule,
  getInterviewSchedule,
  getInterviewSchedules,
  updateInterviewSchedule,
} from "../controllers/interviewController.js";
import { checkLogin } from "../middlewares/checkLogin.js";
import {
  doInterviewValidationHandler,
  doInterviewValidators,
} from "../middlewares/interviewValidators.js";

const router = express.Router();

router.get("/", checkLogin, getInterviewSchedule);
router.get("/", checkLogin, getInterviewSchedules);
router.post(
  "/",
  checkLogin,
  doInterviewValidators,
  doInterviewValidationHandler,
  createInterviewSchedule,
);
router.put(
  "/",
  checkLogin,
  doInterviewValidators,
  doInterviewValidationHandler,
  updateInterviewSchedule,
);
router.delete("/", checkLogin, deleteInterviewSchedule);

export default router;
