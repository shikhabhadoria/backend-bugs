const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskSummaries,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.get("/summaries", getTaskSummaries);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
