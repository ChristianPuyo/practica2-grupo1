const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: { 
    type: DataTypes.TEXT,
    allowNull: false
  },
  periodId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'periods',
      key: 'id'
    }
  },courseId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'courses',
      key: 'id'
    }
  },teacherId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'teachers',
      key: 'id'
    }
  }
}, {
  tableName: 'groups',
  timestamps: false
});

module.exports = Group;

