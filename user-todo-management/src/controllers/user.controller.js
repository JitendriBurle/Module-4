import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { supabase } from "../config/supabase.js";

export const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;

  const { data: existing } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existing)
    return res.status(409).json({ message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from("users").insert([
    {
      name,
      email,
      password: hashedPassword,
    },
  ]);

  if (error)
    return res.status(500).json({ message: error.message });

  res.status(201).json({ message: "User registered successfully" });
};
