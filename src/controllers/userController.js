const { users } = require("../db");

// GET /api/users
function getAllUsers(req, res) {
  res.json(users);
}

// GET /api/users/:id
function getUserById(req, res) {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
}

// POST /api/users
function createUser(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
}

module.exports = { getAllUsers, getUserById, createUser };
