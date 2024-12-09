// ./routes/invoiceRoutes.ts
import { Router } from 'express';
import { 
  createInvoiceController, 
  getAllInvoicesController, 
  getInvoiceByIdController, 
  updateInvoiceController, 
  deleteInvoiceController,
  getInvoiceDetailsController,
  getAllInvoicesWithProductsController,
  updateProductQuantityInInvoiceController,
  deleteProductFromInvoiceController,
  getInvoicesByUserController,
  getMostSoldProductsController,
} from '../controllers/invoiceController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, createInvoiceController);
router.get('/', authenticate, getAllInvoicesController);
router.get('/:id', authenticate, getInvoiceByIdController);
router.put('/:id', authenticate, updateInvoiceController);
router.delete('/:id', authenticate, deleteInvoiceController);
router.get('/:id/details', authenticate, getInvoiceDetailsController);

// Obtener todas las facturas con los productos relacionados
router.get('/invoices-with-products', getAllInvoicesWithProductsController);

// Actualizar la cantidad de un producto en una factura
router.put('/update-product-quantity', updateProductQuantityInInvoiceController);

// Eliminar un producto de una factura y recalcular el total
router.delete('/invoice-detail/:invoiceDetailId', authenticate, deleteProductFromInvoiceController);

// Obtener todas las facturas de un usuario
router.get('/user/:userId/invoices', authenticate, getInvoicesByUserController);

// Ruta para obtener los productos más vendidos
router.get('/most-sold-products', getMostSoldProductsController);

export default router;
