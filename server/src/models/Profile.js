import mongoose from "mongoose";
import ProfileSchema from "../schemas/Profile.js";

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
