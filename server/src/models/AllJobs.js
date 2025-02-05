import mongoose from "mongoose";
import JobsSchema from "../schemas/Jobs.js";

const SavedJobs = mongoose.model("SavedJobs", JobsSchema);

export default SavedJobs;
