"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    static associate(models) {
      Response.belongsTo(models.Employee, { foreignKey: "employee_id" });
      Response.hasMany(models.Answer, {
        foreignKey: "response_id",
        onDelete: "CASCADE",
      });
    }
  }
  Response.init(
    {
      employee_id: DataTypes.INTEGER,
      submitted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Response",
      tableName: "responses",
    }
  );
  return Response;
};
