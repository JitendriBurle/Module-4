import express from "express";
import { readFile, writeFile } from "fs/promises";

const router = express.Router();
const DB = "./src/db.json";

const readDB = async () => JSON.parse(await readFile(DB, "utf-8"));
const writeDB = async (data) =>
  writeFile(DB, JSON.stringify(data, null, 2));

router.post("/add", async (req, res) => {
  const { id, title, completed } = req.body;
  if (!id || !title)
    return res.status(400).json({ message: "Invalid data" });

  const db = await readDB();
  db.todos.push({ id, title, completed: completed || false });
  await writeDB(db);
  res.status(201).json({ message: "Todo added" });
});

router.get("/", async (req, res) => {
  res.json((await readDB()).todos);
});

router.get("/:todoId", async (req, res) => {
  const todo = (await readDB()).todos.find(
    t => t.id == req.params.todoId
  );
  todo
    ? res.json(todo)
    : res.status(404).json({ message: "Todo not found" });
});

router.put("/update/:todoId", async (req, res) => {
  const db = await readDB();
  const index = db.todos.findIndex(
    t => t.id == req.params.todoId
  );

  if (index === -1)
    return res.status(404).json({ message: "Todo not found" });

  db.todos[index] = { ...db.todos[index], ...req.body };
  await writeDB(db);
  res.json({ message: "Todo updated" });
});

router.delete("/delete/:todoId", async (req, res) => {
  const db = await readDB();
  const filtered = db.todos.filter(
    t => t.id != req.params.todoId
  );

  if (filtered.length === db.todos.length)
    return res.status(404).json({ message: "Todo not found" });

  db.todos = filtered;
  await writeDB(db);
  res.json({ message: "Todo deleted" });
});

export default router;
