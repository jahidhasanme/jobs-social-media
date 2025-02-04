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

export const updateProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.body.email });
    await profile.updateOne(req.body);
    profile.save();
    res.send({
      message: "Profile updated successfully!",
      data: profile,
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deleteProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    await profile.deleteOne(profile)
    res.send({
      message: "Profile deleted successfully!",
      data: profile,
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
}
