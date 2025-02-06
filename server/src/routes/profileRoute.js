import express from "express";
import {
  deleteProfileDetails,
  getProfileDetails,
  setProfileDetails,
  updateProfileDetails,
} from "../controllers/profileController.js";

import {
  doProfileValidationHandler,
  doProfileValidators,
} from "../middlewares/profileValidators.js";

const router = express.Router();

router.get("/", getProfileDetails);
router.post(
  "/",
  doProfileValidators,
  doProfileValidationHandler,
  setProfileDetails,
);
router.put(
  "/",
  doProfileValidators,
  doProfileValidationHandler,
  updateProfileDetails,
);
router.delete("/", deleteProfileDetails);

export default router;
