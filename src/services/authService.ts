// ./services/authService.ts
import { User } from '../index';
import jwt from 'jsonwebtoken';

export const validateUser = async (email: string, password: string) => {
  console.log('Buscando usuario con email:', email);
  const user = await User.findOne({ where: { Email: email } });

  if (!user) {
    console.log('Usuario no encontrado:', email);
    return null;
  }

  // Aquí no se realiza la comparación de contraseñas, solo validamos que el usuario exista
  return user;
};

export const generateToken = (userId: string) => {
  // Generar un token JWT
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET || 'camilo', {
    expiresIn: '1h',
  });

  console.log('Token generado:', token);
  return token;
};
