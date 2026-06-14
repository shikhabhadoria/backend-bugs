const { tasks } = require("../db");

// GET /api/tasks
function getAllTasks(req, res) {
  res.json(tasks);
}

// GET /api/tasks/summaries
// Returns a lightweight view: just id + title for every task.
function getTaskSummaries(req, res) {
  const summaries = tasks.map((t) => ({
    id: t.id,
    title: t.title
  }));

  res.json(summaries);
}

// PUT /api/tasks/:id
function updateTask(req, res) {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.completed !== undefined) task.completed = req.body.completed;
  
  res.json(task);
}

// DELETE /api/tasks/:id
function deleteTask(req, res) {
  const id = Number(req.params.id);

  if (id < 1 || id > tasks.length) {
    return res.status(404).json({ error: "Task not found" });
  }

  const index = tasks.findIndex((t) => t.id === id);
  if(index === -1){
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(index, 1);
  
  res.json({ message: "Task deleted", "tasks":tasks });
}

module.exports = { getAllTasks, getTaskSummaries, updateTask, deleteTask };
