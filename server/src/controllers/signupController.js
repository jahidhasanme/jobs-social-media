import bcrypt from "bcrypt";
import User from "../models/User.js";
const signupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 15);
      const user = new User({
        email,
        password: hashedPassword,
      });
      await user.save();
      return res.status(200).json({ message: "User created" });
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error creating user", error: error });
  }
};

export default signupController;
