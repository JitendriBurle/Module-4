import express from "express";
import { readFile, writeFile } from "fs/promises";

const app = express();
const PORT = 3000;
const DB_FILE = "./db.json";

app.use(express.json());

async function readDB() {
  const data = await readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
}
async function writeDB(data) {
  await writeFile(DB_FILE, JSON.stringify(data, null, 2));
}
app.get("/students", async (req, res) => {
  try {
    const students = await readDB();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: "Error reading student data" });
  }
});
app.post("/students", async (req, res) => {
  try {
    const { id, name, course, year } = req.body;

    if (!id || !name || !course || !year) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const students = await readDB();
    students.push({ id, name, course, year });

    await writeDB(students);
    res.status(201).json({ message: "Student added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error adding student" });
  }
});
app.put("/students", async (req, res) => {
  try {
    const { id, name, course, year } = req.body;
    const students = await readDB();

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    students[index] = { ...students[index], name, course, year };
    await writeDB(students);

    res.json({ message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating student" });
  }
});
app.delete("/students/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const students = await readDB();

    const filteredStudents = students.filter((s) => s.id !== id);

    if (filteredStudents.length === students.length) {
      return res.status(404).json({ message: "Student not found" });
    }

    await writeDB(filteredStudents);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting student" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
