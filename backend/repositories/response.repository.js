const {
  Response,
  Employee,
  Answer,
  Question,
  sequelize,
} = require("../models");

class ResponseRepository {
  async createResponse(employeeData, answers) {
    return await sequelize.transaction(async (t) => {
      // Cek email sudah ada?
      const existing = await Employee.findOne({
        where: { email: employeeData.email },
        transaction: t,
      });
      if (existing) {
        throw new Error("Email already exists");
      }

      // Validasi employee fields wajib diisi
      const requiredFields = [
        "first_name",
        "last_name",
        "email",
        "department",
        "years_with_company",
      ];
      for (const f of requiredFields) {
        if (!employeeData[f]) {
          throw new Error(`Field ${f} is required`);
        }
      }

      // Validasi answers
      for (const ans of answers) {
        if (!ans.question_id || !ans.answer_value) {
          throw new Error("Each answer must have question_id and answer_value");
        }
        if (ans.answer_value < 1 || ans.answer_value > 5) {
          throw new Error(
            `Answer for question_id ${ans.question_id} must be between 1 and 5`
          );
        }
        const questionExists = await Question.findByPk(ans.question_id, {
          transaction: t,
        });
        if (!questionExists) {
          throw new Error(`Question with id ${ans.question_id} does not exist`);
        }
      }

      // Insert employee
      const employee = await Employee.create(employeeData, { transaction: t });

      // Insert response
      const response = await Response.create(
        { employee_id: employee.id },
        { transaction: t }
      );

      // Insert answers
      const answerRecords = answers.map((a) => ({
        response_id: response.id,
        question_id: a.question_id,
        answer_value: a.answer_value,
      }));
      await Answer.bulkCreate(answerRecords, { transaction: t });

      return { employee, response, answers: answerRecords };
    });
  }
}

module.exports = new ResponseRepository();
