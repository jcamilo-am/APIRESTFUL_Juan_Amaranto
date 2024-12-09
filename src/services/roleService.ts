// ./services/roleService.ts
import { Role } from '../index';

// Crear un rol
export const createRole = async (data: { Name: string }) => {
  try {
    const role = await Role.create(data);
    return role;
  } catch (error) {
    throw new Error('Error al crear el rol');
  }
};

// Obtener todos los roles
export const getAllRoles = async () => {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw new Error('Error al obtener los roles');
  }
};

// Obtener un rol por ID
export const getRoleById = async (roleId: string) => {
  try {
    const role = await Role.findByPk(roleId);
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    return role;
  } catch (error) {
    throw new Error('Error al obtener el rol');
  }
};

// Actualizar un rol
export const updateRole = async (roleId: string, data: { Name: string }) => {
  try {
    const role = await Role.findByPk(roleId);
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    await role.update(data);
    return role;
  } catch (error) {
    throw new Error('Error al actualizar el rol');
  }
};

// Eliminar un rol
export const deleteRole = async (roleId: string) => {
  try {
    const role = await Role.findByPk(roleId);
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    await role.destroy();
  } catch (error) {
    throw new Error('Error al eliminar el rol');
  }
};

// Función para obtener el total de roles
export const getTotalRoles = async () => {
  try {
    const totalRoles = await Role.count(); // Contar las filas en Role
    return totalRoles;
  } catch (error) {
    throw new Error('Error al obtener el total de roles');
  }
};

export const getRoleByName = async (roleName: string) => {
  try {
    const role = await Role.findOne({
      where: {
        Name: roleName,  // Filtrar por el nombre del rol
      },
    });
    if (!role) {
      throw new Error('Rol no encontrado');
    }
    return role;
  } catch (error) {
    throw new Error('Error al obtener el rol por nombre');
  }
};