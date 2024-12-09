// ./services/userService.ts
import { User } from '../index';

// Función para obtener todos los usuarios
export const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error al obtener los usuarios');
  }
};

// Función para obtener un usuario por su ID
export const getUserById = async (userId: string) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
};

// Función para actualizar un usuario
export const updateUser = async (userId: string, data: any) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await user.update(data);
    return user;
  } catch (error) {
    throw new Error('Error al actualizar el usuario');
  }
};

// Función para eliminar un usuario
export const deleteUser = async (userId: string) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await user.destroy();
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
};
