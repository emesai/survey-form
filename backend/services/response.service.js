const { Employee, Question } = require("../models");
const responseRepository = require("../repositories/response.repository");
const { calculateSatisfaction } = require("../utils/global");

class ResponseService {
  async submitForm({ employee, answers }) {
    const existing = await Employee.findOne({
      where: { email: employee.email },
    });
    if (existing) throw new Error("Email already exists");

    const allQuestions = await Question.findAll();
    const questionIds = allQuestions.map((q) => q.id);

    if (answers.length !== allQuestions.length) {
      throw new Error(
        `All questions must be answered. Expected ${allQuestions.length}, got ${answers.length}`
      );
    }

    for (const ans of answers) {
      if (!questionIds.includes(ans.question_id)) {
        throw new Error(`Invalid question_id: ${ans.question_id}`);
      }
      if (ans.answer_value < 1 || ans.answer_value > 5) {
        throw new Error(
          `Answer for question_id ${ans.question_id} must be between 1 and 5`
        );
      }
    }

    const { employee: savedEmployee } = await responseRepository.createResponse(
      employee,
      answers
    );

    const enrichedAnswers = answers.map((a) => {
      const q = allQuestions.find((q) => q.id === a.question_id);
      return {
        question_id: q.id,
        question_text: q.question_text,
        answer_value: a.answer_value,
      };
    });

    const satisfaction = calculateSatisfaction(
      answers.map((a) => a.answer_value)
    );

    return {
      employee: savedEmployee,
      answers: enrichedAnswers,
      satisfaction,
    };
  }
}

module.exports = new ResponseService();
