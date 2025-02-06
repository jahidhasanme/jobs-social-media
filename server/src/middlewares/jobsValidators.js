import { check, validationResult } from "express-validator";
export const doJobsValidators = [
  check("id").isString().withMessage("id is required").trim(),
  check("companyName").isString().withMessage("companyName is required").trim(),
  check("companyLogo").isString().withMessage("companyLogo is required").trim(),
  check("employer").isString().withMessage("employer is required").trim(),
  check("jobTitle").isString().withMessage("jobTitle is required").trim(),
  check("jobType").isString().withMessage("jobType is required").trim(),
  check("datePosted").isString().withMessage("datePosted is required").trim(),
];

export const doJobsValidationHandler = function (req, res, next) {
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
