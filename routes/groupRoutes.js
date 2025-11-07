const { Router } = require("express");
const {
    createGroupController,
    getAllGroups,
    updateGroupController,
    deleteGroupController,
} = require('../controllers/groupControllers');

const groupRouter = Router();

// Create new Group
groupRouter.post("/", async (req, res) => {
  const { name, periodId, courseId, teacherId } = req.body;
  try {
    const newGroup = await createGroupController({ name, periodId, courseId, teacherId });
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Groups
groupRouter.get("/", async (req, res) => {
  try {
    const groups = await getAllGroups();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update Group by ID
groupRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const groupData = req.body;
  try {
    const updatedGroup = await updateGroupController(id, groupData);
    if (!updatedGroup) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Delete Group by ID
groupRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGroup = await deleteGroupController(id);
    if (!deletedGroup) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.status(200).json({ message: "Group deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = groupRouter;