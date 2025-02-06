import express from "express";
import {
  createInterviewSchedule,
  deleteInterviewSchedule,
  getInterviewSchedule,
  getInterviewSchedules,
  updateInterviewSchedule,
} from "../controllers/interviewController.js";

const router = express.Router();

router.get("/", getInterviewSchedule);
router.get("/", getInterviewSchedules);
router.post("/", createInterviewSchedule);
router.put("/", updateInterviewSchedule);
router.delete("/", deleteInterviewSchedule);

export default router;
