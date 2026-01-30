import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import * as UserService from '../services/user.service.js';

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password, age, role } = req.body;

  const { data: existing } = await UserService.findUserByEmail(email);
  if (existing)
    return res.status(409).json({ message: 'Email already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await UserService.createUser({
    name,
    email,
    password: hashedPassword,
    age,
    role,
  });

  if (error)
    return res.status(500).json({ message: error.message });

  res.status(201).json(data[0]);
};

export const getUsers = async (req, res) => {
  const { data, error } = await UserService.getAllUsers();
  if (error) return res.status(500).json({ message: error.message });
  res.json(data);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await UserService.getUserById(id);

  if (error)
    return res.status(404).json({ message: 'User not found' });

  res.json(data);
};

export const updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { id } = req.params;
  const updates = { ...req.body };

  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10);
  }

  const { data, error } = await UserService.updateUser(id, updates);
  if (error)
    return res.status(404).json({ message: 'User not found' });

  res.json(data[0]);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { error } = await UserService.deleteUser(id);

  if (error)
    return res.status(404).json({ message: 'User not found' });

  res.json({ message: 'User deleted successfully' });
};
