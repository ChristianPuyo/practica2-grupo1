const { Router } = require("express");
const {
    createEnrollmentController,
    getAllEnrollmentsController,
    updateEnrollmentController,
    deleteEnrollmentController,
} = require('../controllers/enrollmentControllers');

const enrollmentRouter = Router();

// Create new Enrollment
enrollmentRouter.post("/", async (req, res) => {
  const { studentId, courseId, groupId, periodId, enrollmentDate, grade, gradeAssignedAt  } = req.body;
  try {
    const newEnrollment = await createEnrollmentController({ studentId, courseId, groupId, periodId, enrollmentDate, grade, gradeAssignedAt});
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Enrollment
enrollmentRouter.get("/", async (req, res) => {
  try {
    const enrollment = await getAllEnrollmentsController();
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update Enrollment by ID
enrollmentRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const enrollmentData = req.body;
  try {
    const updatedEnrollment = await updateEnrollmentController(id, enrollmentData);
    if (!updatedEnrollment) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.status(200).json(updatedEnrollment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete Enrollment by ID
enrollmentRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEnrollment = await deleteEnrollmentController(id);
    if (!deletedEnrollment) {
      return res.status(404).json({ errorRuta: "Enrollment not found" });
    }
    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = enrollmentRouter;