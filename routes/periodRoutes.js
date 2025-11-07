const { Router } = require("express");
const { 
  createPeriodController,
  getAllPeriods,
  updatePeriodController,
  deletePeriodController,
} = require('../controllers/periodController');

const periodRouter = Router();

// Create new Period
periodRouter.post("/", async (req, res) => {
  const { name, startDate, endDate, enrollmentStartDate, enrollmentEndDate, gradesStartDate, gradesEndDate} = req.body;
  try {
    const newPeriod = await createPeriodController({ name, startDate, endDate, enrollmentStartDate, enrollmentEndDate, gradesStartDate, gradesEndDate});
    res.status(201).json(newPeriod);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Period
periodRouter.get("/", async (req, res) => {
  try {
    const period = await getAllPeriods();
    res.status(200).json(period);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update Period by ID
periodRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const periodData = req.body;
  try {
    const updatedPeriod = await updatePeriodController(id, periodData);
    if (!updatedPeriod) {
      return res.status(404).json({ error: "Period not found" });
    }
    res.status(200).json(updatedPeriod);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete plan by ID
periodRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPeriod = await deletePeriodController(id);
    if (!deletedPeriod) {
      return res.status(404).json({ errorRuta: "Period not found" });
    }
    res.status(200).json({ message: "Period deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = periodRouter;