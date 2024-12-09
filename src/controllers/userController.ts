// ./controllers/userController.ts
import { Request, Response } from 'express';
import { getAllUsers, getUserById, updateUser, deleteUser } from '../services/userService';

// Controlador para obtener todos los usuarios
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();  // Llamar al servicio que obtiene todos los usuarios
    res.status(200).json(users);         // Retornar los usuarios encontrados
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Controlador para obtener un usuario por su ID
export const getAUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(req.params.id);  
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Controlador para actualizar un usuario
export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Controlador para eliminar un usuario
export const deleteUserController = async (req: Request, res: Response) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};