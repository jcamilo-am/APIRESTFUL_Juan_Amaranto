// ./controllers/roleController.ts
import { Request, Response } from 'express';
import {
  createRole, 
  getAllRoles, 
  getRoleById, 
  updateRole, 
  deleteRole, 
  getTotalRoles,
  getRoleByName
} from '../services/roleService';

// Crear un rol
export const createRoleController = async (req: Request, res: Response) => {
  try {
    const role = await createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener todos los roles
export const getAllRolesController = async (req: Request, res: Response) => {
  try {
    const roles = await getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener un rol por ID
export const getRoleByIdController = async (req: Request, res: Response) => {
  try {
    const role = await getRoleById(req.params.id);
    res.status(200).json(role);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Actualizar un rol
export const updateRoleController = async (req: Request, res: Response) => {
  try {
    const role = await updateRole(req.params.id, req.body);
    res.status(200).json(role);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Eliminar un rol
export const deleteRoleController = async (req: Request, res: Response) => {
  try {
    await deleteRole(req.params.id);
    res.status(200).json({ message: 'Rol eliminado' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Controlador para obtener el total de roles
export const getTotalRolesController = async (req: Request, res: Response) => {
  try {
    const totalRoles = await getTotalRoles();  // Llamar al servicio que obtiene el total de roles
    res.status(200).json({ totalRoles });      // Retornar el total de roles
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};
// Controlador para obtener un rol por su nombre
export const getRoleByNameController = async (req: Request, res: Response) => {
  try {
    const roleName = req.params.name;  // Obtener el nombre del rol desde los parámetros
    const role = await getRoleByName(roleName);  // Llamar al servicio para obtener el rol
    res.status(200).json(role);  // Retornar el rol encontrado
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });  // Responder con error 404 si el rol no se encuentra
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};