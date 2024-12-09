import { Request, Response } from 'express';
import { validateUser, generateToken } from '../services/authService';

export const loginController = async (req: Request, res: Response) => {
  const { Email, Password } = req.body;

  try {
    console.log('Request body:', { Email, Password });

    // Validar el usuario
    const user = await validateUser(Email, Password);
    if (!user) {
      console.log('Usuario no encontrado o contraseña incorrecta');
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    console.log('Usuario validado:', user);

    // Generar el token
    const token = generateToken(user.id.toString());
    console.log('Token generado:', token);

    // Enviar el token al cliente
    res.json({ token });
  } catch (error) {
    console.error('Error en el controlador de login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


