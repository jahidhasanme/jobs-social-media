import { check, validationResult } from "express-validator";
export const doProfileValidators = [
  check("name").isString().withMessage("Name is required").trim(),
  check("email").isEmail().withMessage("Email is required").trim(),
  check("presentJobTitle")
    .isString()
    .withMessage("Present Job Title is required")
    .trim(),
  check("presentJobCompany")
    .isString()
    .withMessage("Present Job Company is required")
    .trim(),
  check("formerJobCompany")
    .isString()
    .withMessage("Former Job Company is required")
    .trim(),
  check("major").isString().withMessage("Major is required").trim(),
  check("university").isString().withMessage("University is required").trim(),
  check("graduationYear")
    .isString()
    .withMessage("Graduation Year is required")
    .trim(),
  check("graduationYear")
    .isString()
    .withMessage("graduationYear is required")
    .trim(),
  check("college").isString().withMessage("College is required").trim(),
  check("school").isString().withMessage("School is required").trim(),
];

export const doProfileValidationHandler = function (req, res, next) {
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
