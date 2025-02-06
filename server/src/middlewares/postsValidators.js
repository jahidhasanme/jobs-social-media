import { check, validationResult } from "express-validator";
export const doPostsValidators = [
  check("id").isString().withMessage("id is required").trim(),
  check("name").isString().withMessage("name is required").trim(),
  check("userImg").isString().withMessage("userImg is required").trim(),
  check("presentJobCompany")
    .isString()
    .withMessage("Present Job Company is required")
    .trim(),
  check("message").isString().withMessage("message is required").trim(),
  check("time").isString().withMessage("time is required").trim(),
  check("description").isString().withMessage("description is required").trim(),
  check("images").isArray().withMessage("images is required").trim(),
  check("likeCount").isNumeric().withMessage("likeCount is required").trim(),
  check("comments").isNumeric().withMessage("comments is required").trim(),
  check("share").isNumeric().withMessage("share is required").trim(),
];

export const doPostsValidationHandler = function (req, res, next) {
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
