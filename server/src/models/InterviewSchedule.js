import mongoose from "mongoose";
import InterviewScheduleSchema from "../schemas/InterviewSchedule.js";

const InterviewSchedule = mongoose.model("InterviewSchedule", InterviewScheduleSchema);

export default InterviewSchedule;
