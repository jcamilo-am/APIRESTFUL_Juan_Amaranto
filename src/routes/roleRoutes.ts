// ./routes/roleRoutes.ts
import express from 'express';
import { authenticate } from '../middlewares/authMiddleware';
import { 
  createRoleController, 
  getAllRolesController, 
  getRoleByIdController, 
  updateRoleController, 
  deleteRoleController, 
  getTotalRolesController,
  getRoleByNameController
} from '../controllers/roleController';

const router = express.Router();

router.post('/', authenticate, createRoleController);
router.get('/', authenticate, getAllRolesController);
router.get('/:id', authenticate, getRoleByIdController);
router.put('/:id', authenticate, updateRoleController);
router.delete('/:id', authenticate, deleteRoleController);
router.get('/total', authenticate, getTotalRolesController);
router.get('/name/:name', authenticate, getRoleByNameController);

export default router;
