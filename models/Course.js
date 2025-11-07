// models/Course.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  planId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'plans', 
      key: 'id'
    }
  },
  credits: {  
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cycle: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'courses',
  timestamps: false
});

module.exports = Course;

