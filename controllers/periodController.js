const Period = require('../models/Period');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Create new Period
const createPeriodController = async (periodData) => {
    try {
      const newPeriod = await Period.create(periodData);
      return newPeriod;
    } catch (err) {
      throw new Error(err.message);
    }
  };
  

// Get all Periods
const getAllPeriods = async () => {
  try {
    const period = await Period.findAll();
    return period;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Update Period by ID
const updatePeriodController = async (id, periodData) => {
  try {
    const period = await Period.findByPk(id);
    if (!period) return null;
    await period.update(periodData);
    return period;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Delete Plan by ID
const deletePeriodController = async (id) => {
  try {
    const period = await Period.findByPk(id);
    if (!period) return null;
    await period.destroy();
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};



module.exports = {
    createPeriodController,
    getAllPeriods,
    updatePeriodController,
    deletePeriodController,
};
