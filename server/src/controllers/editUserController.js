import User from "../models/User.js";

const editUser = async (req, res) => {
  try {
    const user = User.findOne({ email });
    if (user) {
      await user.updateOne(req.body);
      await user.save();
      res.send({
        message: "User edited successfully!",
        data: user,
      });
    } else {
      res.status(404).send({
        error: "User not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error",
    });
  }
};

export default editUser;
