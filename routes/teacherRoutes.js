const { Router } = require("express");
const {
    createTeacherController,
    getAllTeachers,
    updateTeacherController,
    deleteTeacherController,
  getAllStudents, 
  getStudentById, 
  createStudentController, 
  updateStudentController, 
  deleteStudentController,
  searchStudentsController,
  getStudentStatisticsController,
  bulkCreateStudentsController
} = require('../controllers/teacherController');

const teacherRouter = Router();

// Create new Teacher
teacherRouter.post("/", async (req, res) => {
    const { dni, firstName, lastName, email } = req.body;
    try {
      const newTeacher = await createTeacherController({ dni, firstName, lastName, email });
      res.status(201).json(newTeacher);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


// Get all Teachers
teacherRouter.get("/", async (req, res) => {
    try {
      const teachers = await getAllTeachers();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Update Teacher by ID
teacherRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const teacherData = req.body;
    try {
      const updatedTeacher = await updateTeacherController(id, teacherData);
      if (!updatedTeacher) {
        return res.status(404).json({ error: "Teacher not found" });
      }
      res.status(200).json(updatedTeacher);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// Delete Teacher by ID
teacherRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedTeacher = await deleteTeacherController(id);
      if (!deletedTeacher) {
        return res.status(404).json({ error: "Teacher not found" });
      }
      res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Buscar estudiantes por campo (dni, firstName, email)
teacherRouter.get("/search", async (req, res) => {
  const { dni, firstName, email } = req.query;
  console.log("Esto es el query de /search:",req.query);
  
  try {
    const students = await searchStudentsController({ dni, firstName, email });
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener estadísticas de estudiantes
teacherRouter.get("/statistics", async (req, res) => {
  try {
    const statistics = await getStudentStatisticsController();
    res.status(200).json(statistics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Subir varios estudiantes mediante archivo
teacherRouter.post("/bulk", async (req, res) => {
  const studentsData = req.body;
  try {
    const students = await bulkCreateStudentsController(studentsData);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



// Obtener un estudiante por ID
teacherRouter.get("/:id", async (req, res) => {
  console.log("Esta es la ruta /:id")
  const { id } = req.params;
  try {
    const student = await getStudentById(id);
    if (!student) {
      return res.status(404).json({ errorRuta: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ errorRuta: error.message });
  }
});










module.exports = teacherRouter;