// ./routes/personRoutes.ts
import express from 'express';
import { 
  createPersonController, 
  getAllPeopleController, 
  getPersonByIdController, 
  updatePersonController, 
  deletePersonController 
} from '../controllers/personController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createPersonController);
router.get('/', authenticate, getAllPeopleController);
router.get('/:id', authenticate, getPersonByIdController);
router.put('/:id', authenticate, updatePersonController);
router.delete('/:id', authenticate, deletePersonController);

export default router;
