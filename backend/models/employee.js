"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasMany(models.Response, {
        foreignKey: "employee_id",
        onDelete: "CASCADE",
      });
    }
  }
  Employee.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      department: DataTypes.STRING,
      years_with_company: DataTypes.INTEGER,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Employee",
      tableName: "employees",
    }
  );
  return Employee;
};
