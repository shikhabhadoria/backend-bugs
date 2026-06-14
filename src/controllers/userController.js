const { users } = require("../db");

// GET /api/users
function getAllUsers(req, res) {
  res.json(users);
}

// GET /api/users/:id
function getUserById(req, res) {
  const id = req.params.id;
  console.log(id);
  const user = users.find((u) => u.id == id);
  console.log(user);

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
  const ids = users.map((u) => u.id);
  console.log(ids);
  const maxId = Math.max(...ids);
  console.log(maxId);

  const newUser = {
    id: maxId + 1,
    name,
    email,
  };

  users.push(newUser);
  console.log(users);
  res.status(201).json(newUser);
}

function deleteUser(req, res){
  const  id = Number(req.params.id);

  if(id < 0){
    return res.status(400).json({mesage:"id is not correct"})
  }
  console.log(id);
  const index = users.findIndex((u) => u.id === id);
  console.log(index);
  if(index === -1){
    return res.status(400).json({mesage:"index not present"})
  }
  users.splice(index, 1)
  console.log(users);
  return res.status(200).json(users);
  
}

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
