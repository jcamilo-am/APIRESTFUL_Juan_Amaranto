// ./routes/invoiceDetailRoutes.ts
import { Router } from 'express';
import { 
  createInvoiceDetailController, 
  getAllInvoiceDetailsController, 
  getInvoiceDetailByIdController, 
  updateInvoiceDetailController, 
  deleteInvoiceDetailController 
} from '../controllers/invoiceDetailController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, createInvoiceDetailController);
router.get('/', authenticate, getAllInvoiceDetailsController);
router.get('/:id', authenticate, getInvoiceDetailByIdController);
router.put('/:id', authenticate, updateInvoiceDetailController);
router.delete('/:id', authenticate, deleteInvoiceDetailController);

export default router;
