const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {}
  Employee.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employerId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    farmId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'Employee',
    modelName: 'Employee',
  })
  return Employee
}