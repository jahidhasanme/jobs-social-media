import { check, validationResult } from "express-validator";
export const doLoginValidators = [
  check("email")
    .isLength({
      min: 1,
    })
    .isEmail()
    .withMessage("Email is required"),
  check("password").isLength({ min: 1 }).withMessage("Password is required"),
];

export const doLoginValidationHandler = function (req, res, next) {
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
