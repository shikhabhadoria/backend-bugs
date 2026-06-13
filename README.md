# Backend Bug Hunt 🐛

A small Express API (users + tasks) using in-memory arrays as the "database".
**It contains 5 bugs.** Your job: find and fix all of them.

The bugs are a mix of **logical** and **syntax-style** mistakes. None will crash
the app on startup — they all show up only when you actually hit the endpoints.

## Setup

```bash
npm install
npm start
# server runs on http://localhost:3000
```

## Project structure

```
server.js                       # app entry point
src/
  db/index.js                   # in-memory arrays (users, tasks)
  routes/
    userRoutes.js
    taskRoutes.js
  controllers/
    userController.js
    taskController.js
```

## Endpoints to test

| Method | Path                 | What it should do                       |
| ------ | -------------------- | --------------------------------------- |
| GET    | `/api/users`         | list all users                          |
| GET    | `/api/users/:id`     | get one user by id                      |
| POST   | `/api/users`         | create a user (`{ name, email }`)       |
| GET    | `/api/tasks`         | list all tasks                          |
| GET    | `/api/tasks/summaries` | list `{ id, title }` for every task   |
| PUT    | `/api/tasks/:id`     | update a task's title / completed       |
| DELETE | `/api/tasks/:id`     | delete a task by id                     |

## How to hunt

1. Start the server.
2. Call each endpoint (use `curl`, Postman, or the browser for GETs).
3. Compare what you GET back against what the table says *should* happen.
4. When something is wrong, open the matching controller and reason about why.

### Example requests

```bash
# Should return Diya Patel — does it?
curl http://localhost:3000/api/users/2

# Should give you id + title for each task — does it?
curl http://localhost:3000/api/tasks/summaries

# Should actually change the stored task — does it persist if you GET again?
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete task 2 — does the RIGHT task disappear?
curl -X DELETE http://localhost:3000/api/tasks/2
curl http://localhost:3000/api/tasks

# Create two users — do they get unique ids?
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" -d '{"name":"Test","email":"t@e.com"}'
```

Happy hunting! There are exactly **5** bugs.
