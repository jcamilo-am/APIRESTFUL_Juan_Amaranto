// ./middlewares/validateRegister.ts
import { Request, Response, NextFunction } from 'express';

const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { Email, Password } = req.body; // Cambiamos a `Email` y `Password`

  // Validar que el Email y la contraseña estén presentes
  if (!Email || !Password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  // Validar el formato del Email (puedes usar una expresión regular más robusta)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email)) {
    res.status(400).json({ message: 'Invalid email format' });
    return;
  }

  // Validar la longitud de la contraseña
  if (Password.length < 6) {
    res.status(400).json({ message: 'Password must be at least 6 characters long' });
    return;
  }

  // Si todo está bien, continuar al siguiente middleware o controlador
  next(); // No se devuelve nada aquí
};

export default validateRegister;
