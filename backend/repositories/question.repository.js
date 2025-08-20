const { Question } = require("../models");

class QuestionRepository {
  async findAll() {
    return await Question.findAll();
  }
}

module.exports = new QuestionRepository();
