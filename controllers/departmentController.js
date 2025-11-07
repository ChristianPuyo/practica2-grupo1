const Department = require('../models/Department');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Crear un nuevo estudiante
const createDepartmentController = async (departmentData) => {
    try {
      const newDepartment = await Department.create(departmentData);
      return newDepartment;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  

// Get all departments
const getAllDepartments = async () => {
  try {
    const departments = await Department.findAll();
    return departments;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Update department by ID
const updateDepartmentController = async (id, departmentData) => {
  try {
    const department = await Department.findByPk(id);
    if (!department) return null;
    await department.update(departmentData);
    return department;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Eliminar un estudiante por ID
const deleteDepartmentController = async (id) => {
  try {
    const department = await Department.findByPk(id);
    if (!department) return null;
    await department.destroy();
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Obtener un estudiante por ID
// const getStudentById = async (id) => {
//   try {
//     const student = await Student.findByPk(id);
//     return student;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };






// Buscar estudiantes por campos específicos
// const searchStudentsController = async ({ dni, firstName, email }) => {
//   try {
//     const where = {};
//     if (dni) where.dni = { [Op.like]: `%${dni}%` };
//     if (firstName) where.firstName = { [Op.iLike]: `%${firstName}%` };
//     if (email) where.email = { [Op.like]: `%${email}%` };

//     console.log("Esto es el where", {where});
    
    
//     const students = await Student.findAll({ where });
//     return students;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };

// Obtener estadísticas de estudiantes
// const getStudentStatisticsController = async () => {
//   try {
//     const totalStudents = await Student.count();
//     const avgAge = await Student.findOne({
//       attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'averageAge']],
//     });
//     const studentsByCarrera = await Student.findAll({
//       attributes: ['idCarrera', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
//       group: ['idCarrera'],
//     });

//     return {
//       totalStudents,
//       averageAge: avgAge.dataValues.averageAge,
//       studentsByCarrera,
//     };
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };

// Subir varios estudiantes en masa
// const bulkCreateStudentsController = async (studentsData) => {
//   try {
//     const students = await Student.bulkCreate(studentsData);
//     return students;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };

module.exports = { 
  createDepartmentController, 
  getAllDepartments,
  updateDepartmentController,
  deleteDepartmentController,
//   getStudentById, 
//   createStudentController, 
//   updateStudentController, 
//   deleteStudentController,
//   searchStudentsController,
//   getStudentStatisticsController,
//   bulkCreateStudentsController 
};
