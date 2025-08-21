const { Response, Employee, Answer, sequelize } = require("../models");

class ResponseRepository {
  async createResponse(employeeData, answers) {
    return await sequelize.transaction(async (t) => {
      const employee = await Employee.create(employeeData, { transaction: t });

      const response = await Response.create({ employee_id: employee.id }, { transaction: t });

      const answerRecords = answers.map((a) => ({
        response_id: response.id,
        question_id: a.question_id,
        answer_value: a.answer_value,
      }));
      await Answer.bulkCreate(answerRecords, { transaction: t });

      return employee;
    });
  }
}

module.exports = new ResponseRepository();
