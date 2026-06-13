const users = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com" },
  { id: 2, name: "Diya Patel", email: "diya@example.com" },
  { id: 3, name: "Kabir Singh", email: "kabir@example.com" },
];

const tasks = [
  { id: 1, userId: 1, title: "Write unit tests", completed: false },
  { id: 2, userId: 1, title: "Fix login bug", completed: true },
  { id: 3, userId: 2, title: "Design landing page", completed: false },
  { id: 4, userId: 3, title: "Deploy to staging", completed: true },
];

module.exports = { users, tasks };
