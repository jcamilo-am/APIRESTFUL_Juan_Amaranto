// ./services/registerUserService.ts
import { User } from '../index';

// Función para registrar un usuario
export const registerUser = async (email: string, password: string) => {
  // Buscamos si el email ya está registrado
  const user = await User.findOne({ where: { Email: email } });
  if (user) {
    throw new Error('User already exists');
  }

  // Aquí ya no encriptamos la contraseña, la guardamos tal cual
  const newUser = await User.create({ Email: email, Password: password });

  return newUser;
};
