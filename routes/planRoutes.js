const { Router } = require("express");
const { 
  createPlanController,
  getAllPlans,
  updatePlanController,
  deletePlanController,
} = require('../controllers/planController');

const planRouter = Router();

// Create new Plan
planRouter.post("/", async (req, res) => {
  const { name, departmentId } = req.body;
  try {
    const newPlan = await createPlanController({ name, departmentId });
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Plans
planRouter.get("/", async (req, res) => {
  try {
    const plans = await getAllPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update Plan by ID
planRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const planData = req.body;
  try {
    const updatedPlan = await updatePlanController(id, planData);
    if (!updatedPlan) {
      return res.status(404).json({ error: "Plan not found" });
    }
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete plan by ID
planRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPlan = await deletePlanController(id);
    if (!deletedPlan) {
      return res.status(404).json({ errorRuta: "Plan not found" });
    }
    res.status(200).json({ message: "Plan deleted successfully" });
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








module.exports = planRouter;