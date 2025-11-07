const Teacher = require('../models/Teacher');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Create new Teacher
const createTeacherController = async (teacherData) => {
    try {
      const newTeacher = await Teacher.create(teacherData);
      return newTeacher;
    } catch (err) {
      throw new Error(err.message);
    }
  };


// Get all Teachers
const getAllTeachers = async () => {
    try {
      const teachers = await Teacher.findAll();
      return teachers;
    } catch (err) {
      throw new Error(err.message);
    }
  };

// Update Teacher by ID
const updateTeacherController = async (id, teacherData) => {
    try {
      const teacher = await Teacher.findByPk(id);
      if (!teacher) return null;
      await teacher.update(teacherData);
      return teacher;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Delete Teacher by ID
const deleteTeacherController = async (id) => {
    try {
      const teacher = await Teacher.findByPk(id);
      if (!teacher) return null;
      await teacher.destroy();
      return true;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  

// Obtener un estudiante por ID
const getStudentById = async (id) => {
  try {
    const student = await Student.findByPk(id);
    return student;
  } catch (err) {
    throw new Error(err.message);
  }
};






// Buscar estudiantes por campos específicos
const searchStudentsController = async ({ dni, firstName, email }) => {
  try {
    const where = {};
    if (dni) where.dni = { [Op.like]: `%${dni}%` };
    if (firstName) where.firstName = { [Op.iLike]: `%${firstName}%` };
    if (email) where.email = { [Op.like]: `%${email}%` };

    console.log("Esto es el where", {where});
    
    
    const students = await Student.findAll({ where });
    return students;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Obtener estadísticas de estudiantes
const getStudentStatisticsController = async () => {
  try {
    const totalStudents = await Student.count();
    const avgAge = await Student.findOne({
      attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'averageAge']],
    });
    const studentsByCarrera = await Student.findAll({
      attributes: ['idCarrera', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
      group: ['idCarrera'],
    });

    return {
      totalStudents,
      averageAge: avgAge.dataValues.averageAge,
      studentsByCarrera,
    };
  } catch (err) {
    throw new Error(err.message);
  }
};

// Subir varios estudiantes en masa
const bulkCreateStudentsController = async (studentsData) => {
  try {
    const students = await Student.bulkCreate(studentsData);
    return students;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
    createTeacherController, 
    getAllTeachers,
    updateTeacherController,
    deleteTeacherController,
  getStudentById,
  searchStudentsController,
  getStudentStatisticsController,
  bulkCreateStudentsController 
};
