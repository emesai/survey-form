const express = require("express");
const { body, validationResult } = require("express-validator");
const responseController = require("../controllers/response.controller");

const router = express.Router();

router.post(
  "/submit",
  [
    body("employee.first_name")
      .notEmpty()
      .withMessage("First name is required"),
    body("employee.last_name").notEmpty().withMessage("Last name is required"),
    body("employee.email").isEmail().withMessage("Valid email is required"),
    body("employee.department")
      .notEmpty()
      .withMessage("Department is required"),
    body("employee.years_with_company")
      .isInt({ min: 0 })
      .withMessage("Years must be a number"),

    body("answers").isArray({ min: 1 }).withMessage("Answers are required"),
    body("answers.*.question_id")
      .isInt()
      .withMessage("Question ID must be an integer"),
    body("answers.*.answer_value")
      .isInt({ min: 1, max: 5 })
      .withMessage("Answer must be between 1 and 5"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return responseController.submitForm(req, res);
  }
);

module.exports = router;
