import express from "express";
import {getProfileDetails, setProfileDetails} from "../controllers/profileController.js"

const router = express.Router();

router.get("/", getProfileDetails)
router.post("/", setProfileDetails)

export default router;
