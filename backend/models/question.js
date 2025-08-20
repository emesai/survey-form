"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.hasMany(models.Answer, {
        foreignKey: "question_id",
        onDelete: "CASCADE",
      });
    }
  }
  Question.init(
    {
      question_text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Question",
      tableName: "questions",
    }
  );
  return Question;
};
