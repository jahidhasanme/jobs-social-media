import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { createSecretKey } from "crypto";

import User from "../models/User.js";
const signupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user && user._id) {
      try {
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          const userObject = {
            userid: user._id,
            email: user.email,
            role: user.role
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
          res.send({ message: "Login successful!" });
        }
      } catch (error) {
        console.log(error)
        return res
          .status(400)
          .json({ message: "Invalid username or password!" });
      }
    } else {
      return res.status(400).json({ message: "Invalid username or password!" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error creating user", error: error });
  }
};

export default signupController;
