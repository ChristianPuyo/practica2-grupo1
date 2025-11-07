const Group = require('../models/Group');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Create new Course
const createGroupController = async (groupData) => {
    try {
      const newGroup = await Group.create(groupData);
      return newGroup;
    } catch (err) {
      throw new Error(err.message);
    }
  }; 
  

// Get all Groups
const getAllGroups = async () => {
  try {
    const groups = await Group.findAll();
    return groups;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Update Group by ID
const updateGroupController = async (id, groupData) => {
  try {
    const group = await Group.findByPk(id);
    if (!group) return null;
    await group.update(groupData);
    return group;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Delete Group by ID
const deleteGroupController = async (id) => {
  try {
    const group = await Group.findByPk(id);
    if (!group) return null;
    await group.destroy();
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};



module.exports = {
    createGroupController,
    getAllGroups,
    updateGroupController,
    deleteGroupController, 
};
