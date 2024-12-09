// ./controllers/registerUserController.ts
import { Request, Response } from 'express';
import { registerUser } from '../services/registerUserService';

// Controlador para manejar el registro de usuarios
const registerUserController = async (req: Request, res: Response) => {
  const { Email, Password } = req.body; // Ahora usamos `Email` y `Password` con mayúscula inicial

  try {
    const newUser = await registerUser(Email, Password); // Llamada al servicio
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export { registerUserController };
