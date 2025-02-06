import { check, validationResult } from "express-validator";
export const doInterviewValidators = [
  check("id").isString().withMessage("id is required").trim(),
  check("employer").isString().withMessage("employer is required").trim(),
  check("candidate").isString().withMessage("candidate is required").trim(),
  check("date").isString().withMessage("date is required").trim(),
  check("interviewLocation")
    .isString()
    .withMessage("interviewLocation is required")
    .trim(),
  check("time").isString().withMessage("time is required").trim(),
];

export const doInterviewValidationHandler = function (req, res, next) {
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
