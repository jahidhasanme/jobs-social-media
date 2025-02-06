import express from "express";
import {
  applyJob,
  archiveJob,
  createJob,
  deleteAppliedJob,
  deleteArchivedJob,
  deleteJob,
  deleteSavedJob,
  getAppliedPaginatedJobs,
  getArchivedPaginatedJobs,
  getPaginatedJobs,
  getSavedPaginatedJobs,
  saveJob,
  updateJob,
} from "../controllers/jobsController.js";
const router = express.Router();

router.get("/", getPaginatedJobs);
router.post("/", createJob);
router.put("/", updateJob);
router.delete("/", deleteJob);

router.get("/saved", getSavedPaginatedJobs);
router.post("/saved", saveJob);
router.delete("/saved", deleteSavedJob);

router.get("/archive", getArchivedPaginatedJobs);
router.post("/archive", archiveJob);
router.delete("/archive", deleteArchivedJob);

router.get("/applied", getAppliedPaginatedJobs);
router.delete("/apply", applyJob);
router.delete("/applied", deleteAppliedJob);

export default router;
