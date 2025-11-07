const Enrollment = require('../models/Enrollment');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Create new enrollment
const createEnrollmentController = async (enrollmentData) => {
    try {
      const newEnrollment = await Enrollment.create(enrollmentData);
      return newEnrollment;
    } catch (err) {
      throw new Error(err.message);
    }
  }; 
  

// Get all Enrollment
const getAllEnrollmentsController = async () => {
  try {
    const enrollment = await Enrollment.findAll();
    return enrollment;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Update Enrollment by ID
const updateEnrollmentController = async (id, enrollmentData) => {
  try {
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) return null;
    await enrollment.update(enrollmentData);
    return enrollment;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Delete Enrollment by ID
const deleteEnrollmentController = async (id) => {
  try {
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) return null;
    await enrollment.destroy();
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};



module.exports = {
    createEnrollmentController,
    getAllEnrollmentsController,
    updateEnrollmentController,
    deleteEnrollmentController,
};
