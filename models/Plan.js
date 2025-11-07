// models/Plan.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Plan = sequelize.define('Plan', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true 
  }, 
  name: {
    type: DataTypes.TEXT, 
    allowNull: false
  },
  departmentId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'departments',
      key: 'id'
    }
  }
}, {
  tableName: 'plans',
  timestamps: false
});

module.exports = Plan;
