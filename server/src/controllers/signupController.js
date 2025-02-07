import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { createSecretKey } from "crypto";
import User from "../models/User.js";
const signupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(password, 15);
      const user = new User({
        ...req.body,
        password: hashedPassword,
      });
      await user.save();
      if (user) {
        const userObject = {
          userid: user._id,
          email: user.email,
          role: user.role,
        };
        const secretKey = createSecretKey(process.env.JWT_SECRET, "utf-8");
        // generate token
        const token = await new SignJWT(userObject)
          .setExpirationTime("1d")
          .setProtectedHeader({ alg: "HS256" })
          .sign(secretKey);

        // set cookie
        res.cookie("logincookie", token, {
          maxAge: 86400000,
          httpOnly: true,
          signed: true,
        });
      }
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
