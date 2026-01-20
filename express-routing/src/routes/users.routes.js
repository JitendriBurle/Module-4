import express from "express";
import { readFile, writeFile } from "fs/promises";

const router = express.Router();
const DB = "./src/db.json";

const readDB = async () => JSON.parse(await readFile(DB, "utf-8"));
const writeDB = async (data) =>
  writeFile(DB, JSON.stringify(data, null, 2));

router.post("/add", async (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email)
    return res.status(400).json({ message: "Missing fields" });

  const db = await readDB();
  if (db.users.find(u => u.id === id))
    return res.status(409).json({ message: "User exists" });

  db.users.push({ id, name, email });
  await writeDB(db);
  res.status(201).json({ message: "User added" });
});

router.get("/", async (req, res) => {
  res.json((await readDB()).users);
});

router.get("/:userId", async (req, res) => {
  const user = (await readDB()).users.find(
    u => u.id == req.params.userId
  );
  user
    ? res.json(user)
    : res.status(404).json({ message: "User not found" });
});

router.put("/update/:userId", async (req, res) => {
  const db = await readDB();
  const index = db.users.findIndex(u => u.id == req.params.userId);
  if (index === -1)
    return res.status(404).json({ message: "User not found" });

  db.users[index] = { ...db.users[index], ...req.body };
  await writeDB(db);
  res.json({ message: "User updated" });
});

router.delete("/delete/:userId", async (req, res) => {
  const db = await readDB();
  const filtered = db.users.filter(
    u => u.id != req.params.userId
  );

  if (filtered.length === db.users.length)
    return res.status(404).json({ message: "User not found" });

  db.users = filtered;
  await writeDB(db);
  res.json({ message: "User deleted" });
});

export default router;
