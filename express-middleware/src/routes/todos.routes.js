import express from "express";
import { readFile, writeFile } from "fs/promises";
import rateLimiter from "../middleware/rateLimiter.middleware.js";
import validateTodo from "../middleware/validateTodo.middleware.js";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = async () =>
  JSON.parse(await readFile(DB_PATH, "utf-8"));

const writeDB = async (data) =>
  writeFile(DB_PATH, JSON.stringify(data, null, 2));

router.post("/add", validateTodo, async (req, res) => {
  const db = await readDB();
  const newTodo = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  db.todos.push(newTodo);
  await writeDB(db);

  res.status(201).json({ message: "Todo added successfully" });
});

router.get("/", rateLimiter, async (req, res) => {
  const db = await readDB();
  res.json(db.todos);
});

router.get("/:todoId", async (req, res) => {
  const db = await readDB();
  const todo = db.todos.find(t => t.id == req.params.todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

router.put("/update/:todoId", async (req, res) => {
  const db = await readDB();
  const index = db.todos.findIndex(t => t.id == req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  await writeDB(db);

  res.json({ message: "Todo updated successfully" });
});

router.delete("/delete/:todoId", async (req, res) => {
  const db = await readDB();
  const filtered = db.todos.filter(t => t.id != req.params.todoId);

  if (filtered.length === db.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos = filtered;
  await writeDB(db);

  res.json({ message: "Todo deleted successfully" });
});

export default router;
