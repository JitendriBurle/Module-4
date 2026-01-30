import express from "express";
import {
  addTodo,
  getUserTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";
import {
  createTodoValidation,
  todoIdValidation,
} from "../validations/todo.validation.js";

const router = express.Router();

router.post("/add-todo", createTodoValidation, addTodo);
router.get("/get-my-todo/:userId", getUserTodos);
router.put("/update-todo/:todoId", todoIdValidation, updateTodo);
router.delete("/delete-todo/:todoId", todoIdValidation, deleteTodo);

export default router;
