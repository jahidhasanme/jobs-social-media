import { check, validationResult } from "express-validator";
export const doSignupValidators = [
  check("email").isEmail().withMessage("Email is required").trim(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol",
    ),
  check("role").isIn(["user", "employer"]).withMessage("Role is required").trim(),
  check("name").isString().withMessage("Name is required!").trim(),
  check("phone").isMobilePhone().withMessage("Phone is required!").trim(),
];

export const doSignupValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(500).send({
      data: {
        username: req.body.username,
      },
      errors: mappedErrors,
    });
  }
};
