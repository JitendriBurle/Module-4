import express from "express";
import { signup } from "../controllers/user.controller.js";
import { signupValidation } from "../validations/user.validation.js";

const router = express.Router();

router.post("/signup", signupValidation, signup);

export default router;
