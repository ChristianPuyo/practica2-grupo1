// models/Student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  planId: {
    type: DataTypes.BIGINT, 
    references: { 
      model: 'plans',
      key: 'id'
    }
  }
}, {
  tableName: 'students',
  timestamps: false
});

module.exports = Student;

