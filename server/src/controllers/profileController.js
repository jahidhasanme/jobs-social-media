import Profile from "../models/Profile.js";

export const getProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    res.send(profile);
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const setProfileDetails = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.send({
      message: "Profile created successfully!",
      data: profile,
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};
