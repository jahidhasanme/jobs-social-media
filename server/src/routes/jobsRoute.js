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
import { checkLogin } from "../middlewares/checkLogin.js";
const router = express.Router();

router.get("/", checkLogin, getPaginatedJobs);
router.post("/", checkLogin, createJob);
router.put("/", checkLogin, updateJob);
router.delete("/", checkLogin, deleteJob);

router.get("/saved", checkLogin, getSavedPaginatedJobs);
router.post("/saved", checkLogin, saveJob);
router.delete("/saved", checkLogin, deleteSavedJob);

router.get("/archive", checkLogin, getArchivedPaginatedJobs);
router.post("/archive", checkLogin, archiveJob);
router.delete("/archive", checkLogin, deleteArchivedJob);

router.get("/applied", checkLogin, getAppliedPaginatedJobs);
router.delete("/apply", checkLogin, applyJob);
router.delete("/applied", checkLogin, deleteAppliedJob);

export default router;
