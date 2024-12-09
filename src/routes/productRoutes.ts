// ./routes/productRoutes.ts
import { Router } from 'express';
import { 
  createProductController, 
  getAllProductsController, 
  getProductByIdController, 
  updateProductController, 
  deleteProductController 
} from '../controllers/productController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, createProductController);
router.get('/', authenticate, getAllProductsController);
router.get('/:id', authenticate, getProductByIdController);
router.put('/:id', authenticate, updateProductController);
router.delete('/:id', authenticate, deleteProductController);

export default router;
