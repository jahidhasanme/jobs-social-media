import mongoose from "mongoose";
import JobsSchema from "../schemas/Jobs.js";
import User from "./User.js";

const SavedJobs = mongoose.model("SavedJobs", {
  ...JobsSchema,
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "User",
    validate: {
      validator: async function (value) {
        const user = await User.findById(value);
        return user && user.role === "user";
      },
      message: "Candidate must have a role of user",
    },
    required: true,
  },
});

export default SavedJobs;
