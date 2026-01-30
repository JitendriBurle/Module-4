import { validationResult } from "express-validator";
import { supabase } from "../config/supabase.js";

export const addTodo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { title, description, userId } = req.body;

  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .single();

  if (!user)
    return res.status(404).json({ message: "User not found" });

  const { data, error } = await supabase.from("todos").insert([
    {
      title,
      description,
      user_id: userId,
    },
  ]);

  if (error)
    return res.status(500).json({ message: error.message });

  res.status(201).json({ message: "Todo added successfully" });
};

export const getUserTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  if (error)
    return res.status(500).json({ message: error.message });

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  const { data, error } = await supabase
    .from("todos")
    .update(req.body)
    .eq("id", todoId)
    .select();

  if (!data || data.length === 0)
    return res.status(404).json({ message: "Todo not found" });

  res.json({ message: "Todo updated successfully" });
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);

  if (error)
    return res.status(404).json({ message: "Todo not found" });

  res.json({ message: "Todo deleted successfully" });
};
