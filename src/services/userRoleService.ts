// ./services/userRoleService.ts
import { UserRole } from "../index";
import { User } from "../index";
import { Role } from "../index";

// Servicio para crear una relación usuario-rol
export const createUserRole = async (data: any) => {
  try {
    const userRole = await UserRole.create(data);
    return userRole;
  } catch (error) {
    throw new Error("Error al crear la relación usuario-rol");
  }
};

// Servicio para obtener todas las relaciones usuario-rol
export const getAllUserRoles = async () => {
  try {
    const userRoles = await UserRole.findAll();
    return userRoles;
  } catch (error) {
    throw new Error("Error al obtener las relaciones usuario-rol");
  }
};

// Servicio para obtener una relación usuario-rol por ID
export const getUserRoleById = async (id: string) => {
  try {
    const userRole = await UserRole.findByPk(id);
    if (!userRole) {
      throw new Error("Relación usuario-rol no encontrada");
    }
    return userRole;
  } catch (error) {
    throw new Error("Error al obtener la relación usuario-rol");
  }
};

// Servicio para actualizar una relación usuario-rol
export const updateUserRole = async (id: string, data: any) => {
  try {
    const userRole = await UserRole.findByPk(id);
    if (!userRole) {
      throw new Error("Relación usuario-rol no encontrada");
    }
    await userRole.update(data);
    return userRole;
  } catch (error) {
    throw new Error("Error al actualizar la relación usuario-rol");
  }
};

// Servicio para eliminar una relación usuario-rol
export const deleteUserRole = async (id: string) => {
  try {
    const userRole = await UserRole.findByPk(id);
    if (!userRole) {
      throw new Error("Relación usuario-rol no encontrada");
    }
    await userRole.destroy();
  } catch (error) {
    throw new Error("Error al eliminar la relación usuario-rol");
  }
};

// Función para actualizar múltiples roles de un usuario
export const updateRolesForUser = async (userId: number, roleIds: number[]) => {
  try {
    // Eliminar roles anteriores
    await UserRole.destroy({
      where: {
        UserId: userId,
      },
    });

    // Asignar nuevos roles
    for (let roleId of roleIds) {
      await UserRole.create({
        UserId: userId,
        RoleId: roleId,
      });
    }

    return { message: "Roles actualizados correctamente" };
  } catch (error) {
    throw new Error("Error al actualizar los roles del usuario");
  }
};

// Función para obtener los roles de un usuario específico
export const getRolesForUser = async (userId: number) => {
  try {
    const roles = await UserRole.findAll({
      where: { UserId: userId },
      include: [
        {
          model: Role,
          attributes: ['id', 'Name'],  // Devolver solo los atributos relevantes del rol
        },
      ],
    });
    return roles;
  } catch (error) {
    throw new Error("Error al obtener los roles del usuario");
  }
};

// Función para contar el total de roles de un usuario
export const countRolesForUser = async (userId: number) => {
  try {
    const roleCount = await UserRole.count({
      where: {
        UserId: userId,
      },
    });
    return { totalRoles: roleCount };
  } catch (error) {
    throw new Error("Error al contar los roles del usuario");
  }
};