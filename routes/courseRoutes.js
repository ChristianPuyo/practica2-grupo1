const { Router } = require("express");
const {
    createCourseController,
    getAllCourses,
    updateCourseController,
    deleteCourseController,
} = require('../controllers/courseController');

const courseRouter = Router();

// Create new Course
courseRouter.post("/", async (req, res) => {
  const { name, planId, credits, cycle} = req.body;
  try {
    const newCourse = await createCourseController({ name, planId, credits, cycle});
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Get all Courses
courseRouter.get("/", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update Course by ID
courseRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const courseData = req.body;
  try {
    const updatedCourse = await updateCourseController(id, courseData);
    if (!updatedCourse) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Delete Course by ID
courseRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCourse = await deleteCourseController(id);
    if (!deletedCourse) {
      return res.status(404).json({ errorRuta: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = courseRouter;