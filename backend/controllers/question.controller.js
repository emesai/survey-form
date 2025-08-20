const questionService = require("../services/question.service");

class QuestionController {
  async getQuestions(req, res) {
    try {
      const questions = await questionService.getAllQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new QuestionController();
