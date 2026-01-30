import express from 'express';
import * as UserController from '../controllers/user.controller.js';
import {
  createUserValidation,
  updateUserValidation,
} from '../validations/user.validation.js';

const router = express.Router();

router.post('/', createUserValidation, UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.put('/:id', updateUserValidation, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
