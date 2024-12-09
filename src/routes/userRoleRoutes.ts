// ./routes/userRoleRoutes.ts
import express from "express";
import { authenticate } from "../middlewares/authMiddleware";
import {
  createUserRoleController,
  getAllUserRolesController,
  getUserRoleByIdController,
  updateUserRoleController,
  deleteUserRoleController,
  updateRolesForUserController,
  getRolesForUserController,
  countRolesForUserController,
} from "../controllers/userRoleController";

const router = express.Router();

// Rutas protegidas
router.post("/", authenticate, createUserRoleController);
router.get("/", authenticate, getAllUserRolesController);
router.get("/:id", authenticate, getUserRoleByIdController);
router.put("/:id", authenticate, updateUserRoleController);
router.delete("/:id", authenticate, deleteUserRoleController);

// Ruta para actualizar roles de un usuario
router.put("/:id/roles", authenticate, updateRolesForUserController);

// Ruta para obtener los roles de un usuario
router.get("/:id/roles", authenticate, getRolesForUserController);

// Ruta para contar los roles de un usuario
router.get("/:id/roles/count", authenticate, countRolesForUserController);

export default router;
