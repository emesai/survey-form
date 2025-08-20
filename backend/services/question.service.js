const questionRepository = require("../repositories/question.repository");

class QuestionService {
  async getAllQuestions() {
    const questions = await questionRepository.findAll();
    return questions;
  }
}

module.exports = new QuestionService();
