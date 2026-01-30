import { body, param } from "express-validator";

export const createTodoValidation = [
  body("title").notEmpty().withMessage("Title is required"),
  body("userId").isUUID().withMessage("Invalid user ID"),
];

export const todoIdValidation = [
  param("todoId").isUUID().withMessage("Invalid todo ID"),
];
