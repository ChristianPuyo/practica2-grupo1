const Plan = require('../models/Plan');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Create new Plan
const createPlanController = async (planData) => {
    try {
      const newPlan = await Plan.create(planData);
      return newPlan;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  

// Get all Plans
const getAllPlans = async () => {
  try {
    const plans = await Plan.findAll();
    return plans;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Update Plan by ID
const updatePlanController = async (id, planData) => {
  try {
    const plan = await Plan.findByPk(id);
    if (!plan) return null;
    await plan.update(planData);
    return plan;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Delete Plan by ID
const deletePlanController = async (id) => {
  try {
    const plan = await Plan.findByPk(id);
    if (!plan) return null;
    await plan.destroy();
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
    createPlanController,
    getAllPlans,
    updatePlanController,
    deletePlanController,

//   getStudentById, 
//   createStudentController, 
//   updateStudentController, 
//   deleteStudentController,
//   searchStudentsController,
//   getStudentStatisticsController,
//   bulkCreateStudentsController 
};
