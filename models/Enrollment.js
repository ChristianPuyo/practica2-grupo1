// models/Enrollment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Enrollment = sequelize.define('Enrollment', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'students',
      key: 'id'
    }
  },
  courseId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'courses',
      key: 'id'
    }
  },
  groupId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'groups',
      key: 'id'
    }
  },
  periodId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'periods',
      key: 'id'
    }
  },
  enrollmentDate:{  
    type: DataTypes.DATE,  
    allowNull: false  
  },
  grade: { 
    type: DataTypes.NUMERIC(5, 2)
  },
  gradeAssignedAt: {  
    type: DataTypes.DATE,  
    allowNull: true  // Puede ser NULL si no se ha asignado la nota
  }
}, {
  tableName: 'enrollments',
  timestamps: false
});

module.exports = Enrollment;

