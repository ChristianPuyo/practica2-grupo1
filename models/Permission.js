// models/Permission.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Permission = sequelize.define('Permission', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  rol: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  action:{
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'permissions',
  timestamps: false
});

module.exports = Permission;
