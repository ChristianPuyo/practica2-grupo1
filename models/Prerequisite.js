// models/Prerequisite.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Prerequisite = sequelize.define('Prerequisite', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  course_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'courses',
      key: 'id'
    }
  },
  prerequisite_id: {
    type: DataTypes.BIGINT,
    references: {
      model: 'courses',
      key: 'id'
    }
  }
}, {
  tableName: 'prerequisites',
  timestamps: false
});

module.exports = Prerequisite;

