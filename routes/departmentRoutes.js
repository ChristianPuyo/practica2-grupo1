const { Router } = require("express");
const { 
  createDepartmentController,
  getAllDepartments,
  updateDepartmentController,
  deleteDepartmentController,
} = require('../controllers/departmentController');

const departmentRouter = Router();

// Create new department
departmentRouter.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newDepartment = await createDepartmentController({ name });
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Get all departments
departmentRouter.get("/", async (req, res) => {
  try {
    const departments = await getAllDepartments();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ errorRuta: error.message });
  }
});

//Update department by ID
departmentRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const departmentData = req.body;
  try {
    const updatedDepartment = await updateDepartmentController(id, departmentData);
    if (!updatedDepartment) {
      return res.status(404).json({ errorRuta: "Department not found" });
    }
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete department by ID
departmentRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDepartment = await deleteDepartmentController(id);
    if (!deletedDepartment) {
      return res.status(404).json({ errorRuta: "Department not found" });
    }
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



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






// Obtener un estudiante por ID
// studentRouter.get("/:id", async (req, res) => {
//   console.log("Esta es la ruta /:id")
//   const { id } = req.params;
//   try {
//     const student = await getStudentById(id);
//     if (!student) {
//       return res.status(404).json({ errorRuta: "Student not found" });
//     }
//     res.status(200).json(student);
//   } catch (error) {
//     res.status(500).json({ errorRuta: error.message });
//   }
// });








module.exports = departmentRouter;