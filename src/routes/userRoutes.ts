// ./routes/registerUserRoutes.ts
import express from "express";
import validateRegister from "../middlewares/registerUserMiddleware";
import { registerUserController } from "../controllers/registerUserController";
import { loginController } from "../controllers/authController";
import { authenticate } from "../middlewares/authMiddleware";
import { getAllUsersController, getAUserByIdController, updateUserController, deleteUserController } from "../controllers/userController";

const router = express.Router();

// Publicas
router.post("/register", validateRegister, registerUserController);
router.post("/login", loginController);

// Privadas
router.get("/", authenticate, getAllUsersController);
router.get("/:id", authenticate, getAUserByIdController);
router.put("/:id", authenticate, updateUserController);
router.delete("/:id", authenticate, deleteUserController);

export default router;