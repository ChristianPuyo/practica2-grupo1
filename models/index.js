const sequelize = require('../db');

// Importar modelos
const Course = require('./Course')
const Department = require('./Department')
const Enrollment = require('./Enrollment')
const Group = require('./Group');
const Period = require('./Period')
const Permission = require('./Permission')
const Plan = require('./Plan')
const Prerequisite = require('./Prerequisite')
const Student = require('./Student')
const Teacher = require('./Teacher')
const User = require('./User')



 
// Importar todos los modelos
const db = {
  sequelize, //Con esto nos aseguramos de exportar la misma instancia de sequelize que creamos
  Course,
  Department,
  Enrollment,
  Group,
  Period,
  Permission,
  Plan,
  Prerequisite,
  Student,
  Teacher,
  User,
};

// Establecer relaciones entre modelos 

//Relationship between Department and Plan
Department.hasMany(Plan, { foreignKey: 'departmentId', as: 'plans' })
Plan.belongsTo(Department, { foreignKey: 'departmentId', as: 'departments' })

//Relationship between Plan and Course
Plan.hasMany(Course, { foreignKey: 'planId', as:'courses'})
Course.belongsTo(Plan, { foreignKey: 'planId', as: 'plan' })

// Relación entre Plan y Estudiante
Plan.hasMany(Student, { foreignKey: 'planId', as: 'students' });
Student.belongsTo(Plan, { foreignKey: 'planId', as: 'plan' });

// Relación entre Curso y Prerequisito
Course.hasMany(Prerequisite, { foreignKey: 'courseId', as: 'prerequisites' });
Prerequisite.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
Prerequisite.belongsTo(Course, { foreignKey: 'prerequisiteId', as: 'prerequisite' });

 
// Relación entre Estudiante y Matrícula
Student.hasMany(Enrollment, { foreignKey: 'studentId', as: 'enrollments' });
Enrollment.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });

// Relación entre Grupo y Periodo
Group.belongsTo(Period, { foreignKey: 'periodId', as: 'period' });
Period.hasMany(Group, { foreignKey: 'periodId', as: 'groups' });

// Relación entre Grupo y course
Group.belongsTo(Course, { foreignKey: 'courseId', as: 'courses' });
Course.hasMany(Group, { foreignKey: 'courseId', as: 'groups' });

// Relación entre Grupo y teacher
Group.belongsTo(Teacher, { foreignKey: 'teacherId', as: 'teachers' });
Teacher.hasMany(Group, { foreignKey: 'teacherId', as: 'groups' }); 

// Relación entre Matrícula y Curso
Enrollment.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
Course.hasMany(Enrollment, { foreignKey: 'courseId', as: 'enrollments' });

// Relación entre Matrícula y Periodo
Enrollment.belongsTo(Period, { foreignKey: 'periodId', as: 'period' });
Period.hasMany(Enrollment, { foreignKey: 'periodId', as: 'enrollments' });


 

