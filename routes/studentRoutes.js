const { Router } = require("express");
const { 
  getAllStudents, 
  getStudentById, 
  createStudentController, 
  updateStudentController, 
  deleteStudentController,
  searchStudentsController,
  getStudentStatisticsController,
  bulkCreateStudentsController
} = require('../controllers/studentController');

const studentRouter = Router();

// Buscar estudiantes por campo (dni, firstName, email)
// studentRouter.get("/search", async (req, res) => {
//   const { dni, firstName, email } = req.query;
//   console.log("Esto es el query de /search:",req.query);
  
//   try {
//     const students = await searchStudentsController({ dni, firstName, email });
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Obtener estadísticas de estudiantes
// studentRouter.get("/statistics", async (req, res) => {
//   try {
//     const statistics = await getStudentStatisticsController();
//     res.status(200).json(statistics);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Subir varios estudiantes mediante archivo
// studentRouter.post("/bulk", async (req, res) => {
//   const studentsData = req.body;
//   try {
//     const students = await bulkCreateStudentsController(studentsData);
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Create new Student
studentRouter.post("/", async (req, res) => {
  const { dni, firstName, lastName, gender, birthdate, email, planId} = req.body;
  try {
    const newStudent = await createStudentController({ dni, firstName, lastName, gender, birthdate, email, planId });
    res.status(201).json(newStudent); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los estudiantes
studentRouter.get("/", async (req, res) => {
  console.log("Esta es la ruta /")
  try {
    const students = await getAllStudents(); 
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ errorRuta: error.message });
  }
});

// Obtener un estudiante por ID
studentRouter.get("/:id", async (req, res) => {
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



// Actualizar un estudiante por ID
studentRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const studentData = req.body;
  try {
    const updatedStudent = await updateStudentController(id, studentData);
    if (!updatedStudent) {
      return res.status(404).json({ errorRuta: "Student not found" });
    }
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un estudiante por ID
studentRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedStudent = await deleteStudentController(id);
    if (!deletedStudent) {
      return res.status(404).json({ errorRuta: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});





module.exports = studentRouter;
