"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Response, { foreignKey: "response_id" });
      Answer.belongsTo(models.Question, { foreignKey: "question_id" });
    }
  }
  Answer.init(
    {
      response_id: DataTypes.INTEGER,
      question_id: DataTypes.INTEGER,
      answer_value: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      sequelize,
      modelName: "Answer",
      tableName: "answers",
    }
  );
  return Answer;
};
