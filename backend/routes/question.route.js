const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question.controller");

router.get("/", (req, res) => questionController.getQuestions(req, res));

module.exports = router;
