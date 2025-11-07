// models/Teacher.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  }
}, {
  tableName: 'teachers',
  timestamps: false
});

module.exports = Teacher;

