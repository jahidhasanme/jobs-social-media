import express from "express";
import {
  getProfileDetails,
  setProfileDetails,
  updateProfileDetails,
  deleteProfileDetails
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/", getProfileDetails);
router.post("/", setProfileDetails);
router.put("/", updateProfileDetails);
router.delete("/", deleteProfileDetails);

export default router;
