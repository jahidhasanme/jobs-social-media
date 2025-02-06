import express from "express";
import {
  createInterviewSchedule,
  deleteInterviewSchedule,
  getInterviewSchedule,
  getInterviewSchedules,
  updateInterviewSchedule,
} from "../controllers/interviewController.js";
import {
  doInterviewValidationHandler,
  doInterviewValidators,
} from "../middlewares/interviewValidators.js";

const router = express.Router();

router.get("/", getInterviewSchedule);
router.get("/", getInterviewSchedules);
router.post(
  "/",
  doInterviewValidators,
  doInterviewValidationHandler,
  createInterviewSchedule,
);
router.put(
  "/",
  doInterviewValidators,
  doInterviewValidationHandler,
  updateInterviewSchedule,
);
router.delete("/", deleteInterviewSchedule);

export default router;
