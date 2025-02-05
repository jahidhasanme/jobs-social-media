import mongoose from "mongoose";
import JobsSchema from "../schemas/Jobs.js";

const ArchivedJobs = mongoose.model("ArchivedJobs", JobsSchema);

export default ArchivedJobs;
