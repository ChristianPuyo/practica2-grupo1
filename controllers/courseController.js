const Course = require('../models/Course');
const { Op } = require('sequelize');
const sequelize = require('../db'); // Para estadísticas y operaciones de BD avanzadas


// Create new Course
const createCourseController = async (courseData) => {
    try {
      const newCourse = await Course.create(courseData);
      return newCourse;
    } catch (err) {
      throw new Error(err.message);
    }
  }; 
  

// Get all Courses
const getAllCourses = async () => {
  try {
    const courses = await Course.findAll();
    return courses;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Update Course by ID
const updateCourseController = async (id, courseData) => {
  try {
    const course = await Course.findByPk(id);
    if (!course) return null;
    await course.update(courseData);
    return courseData;
  } catch (err) {
    throw new Error(err.message);
  }
};

// Delete Course by ID
const deleteCourseController = async (id) => {
  try {
    const course = await Course.findByPk(id);
    if (!course) return null;
    await course.destroy();
    return true;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
    createCourseController,
    getAllCourses,
    updateCourseController,
    deleteCourseController,
};
