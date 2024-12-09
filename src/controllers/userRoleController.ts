// ./controllers/userRoleController.ts
import { Request, Response } from "express";
import {
  createUserRole,
  getAllUserRoles,
  getUserRoleById,
  updateUserRole,
  deleteUserRole,
  updateRolesForUser,
  getRolesForUser,
  countRolesForUser
} from "../services/userRoleService";

// Controlador para crear una relación usuario-rol
export const createUserRoleController = async (req: Request, res: Response) => {
  try {
    const userRole = await createUserRole(req.body);
    res.status(201).json(userRole);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Controlador para obtener todas las relaciones usuario-rol
export const getAllUserRolesController = async (req: Request, res: Response) => {
  try {
    const userRoles = await getAllUserRoles();
    res.status(200).json(userRoles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Controlador para obtener una relación usuario-rol por ID
export const getUserRoleByIdController = async (req: Request, res: Response) => {
  try {
    const userRole = await getUserRoleById(req.params.id);
    res.status(200).json(userRole);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Controlador para actualizar una relación usuario-rol
export const updateUserRoleController = async (req: Request, res: Response) => {
  try {
    const userRole = await updateUserRole(req.params.id, req.body);
    res.status(200).json(userRole);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Controlador para eliminar una relación usuario-rol
export const deleteUserRoleController = async (req: Request, res: Response) => {
  try {
    await deleteUserRole(req.params.id);
    res.status(200).json({ message: "UserRole deleted" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  }
};

// Controlador para actualizar múltiples roles de un usuario
export const updateRolesForUserController = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);  // Obtener el id del usuario
    const { roleIds } = req.body;  // Obtener los roleIds enviados en el cuerpo de la solicitud
    const result = await updateRolesForUser(userId, roleIds);  // Llamar al servicio
    res.status(200).json(result);  // Responder con mensaje de éxito
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Controlador para obtener los roles de un usuario específico
export const getRolesForUserController = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);  // Obtener el id del usuario
    const roles = await getRolesForUser(userId);  // Llamar al servicio
    res.status(200).json(roles);  // Retornar los roles asignados
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Controlador para contar los roles de un usuario específico
export const countRolesForUserController = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);  // Obtener el id del usuario
    const result = await countRolesForUser(userId);  // Llamar al servicio
    res.status(200).json(result);  // Retornar el conteo de roles
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};