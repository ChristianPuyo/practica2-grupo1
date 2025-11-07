// models/Period.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Period = sequelize.define('Period', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  enrollmentStartDate: {
    type: DataTypes.DATE
  },
  enrollmentEndDate: {
    type: DataTypes.DATE
  },
  gradesStartDate: {
    type: DataTypes.DATE
  },
  gradesEndDate: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'periods',
  timestamps: false
});

module.exports = Period;

