import { jwtVerify } from "jose";
import { createSecretKey } from "crypto";

export const checkLogin = async (req, res, next) => {
  console.log("Running checkLogin middleware");
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

  if (cookies) {
    try {
      const token = cookies["logincookie"];
       const secretKey = createSecretKey(process.env.JWT_SECRET, "utf-8");
      try {
      // verify token
      const { payload, protectedHeader } = await jwtVerify(token, secretKey);
      req.user = payload;
    } catch (e) {
      res.status(500).json({
        errors: {
          common: {
            msg: "Authentication failure!",
          },
        },
      });
    }
      next();
    } catch (err) {
        res.status(500).json({
          errors: {
            common: {
              msg: "Authentication failure!",
            },
          },
        });
      }
  } else {
    res.status(401).json({
      error: "Authentication failure!",
    });
  }
};
