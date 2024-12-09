"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceController_1 = require("../controllers/invoiceController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticate, invoiceController_1.createInvoiceController);
router.get('/', authMiddleware_1.authenticate, invoiceController_1.getAllInvoicesController);
router.get('/:id', authMiddleware_1.authenticate, invoiceController_1.getInvoiceByIdController);
router.put('/:id', authMiddleware_1.authenticate, invoiceController_1.updateInvoiceController);
router.delete('/:id', authMiddleware_1.authenticate, invoiceController_1.deleteInvoiceController);
router.get('/:id/details', authMiddleware_1.authenticate, invoiceController_1.getInvoiceDetailsController);
router.get('/invoices-with-products', invoiceController_1.getAllInvoicesWithProductsController);
router.put('/update-product-quantity', invoiceController_1.updateProductQuantityInInvoiceController);
router.delete('/invoice-detail/:invoiceDetailId', authMiddleware_1.authenticate, invoiceController_1.deleteProductFromInvoiceController);
router.get('/user/:userId/invoices', authMiddleware_1.authenticate, invoiceController_1.getInvoicesByUserController);
router.get('/most-sold-products', invoiceController_1.getMostSoldProductsController);
exports.default = router;
//# sourceMappingURL=invoiceRoutes.js.map