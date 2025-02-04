import Profile from "../models/Profile.js";

export const getProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    if (profile) {
      res.send(profile);
    } else {
      res.status(404).send({
        error: "Profile not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const setProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    if (!profile) {
      const profile = new Profile(req.body);
      await profile.save();
      res.send({
        message: "Profile created successfully!",
        data: profile,
      });
    } else {
      res.status(403).send({
        error: "Profile already exists!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const updateProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.body.email });
    if (profile) {
      await profile.updateOne(req.body);
      await profile.save();
      res.send({
        message: "Profile updated successfully!",
        data: profile,
      });
    } else {
      res.status(404).send({
        error: "Profile not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deleteProfileDetails = async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    if(profile) {
      await profile.deleteOne(profile);
      res.send({
        message: "Profile deleted successfully!",
        data: profile,
      });
    } else {
      res.status(404).send({
        error: "Profile not found!",
      });
    }

  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};
