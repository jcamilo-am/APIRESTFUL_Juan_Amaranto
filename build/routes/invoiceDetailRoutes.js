"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const invoiceDetailController_1 = require("../controllers/invoiceDetailController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticate, invoiceDetailController_1.createInvoiceDetailController);
router.get('/', authMiddleware_1.authenticate, invoiceDetailController_1.getAllInvoiceDetailsController);
router.get('/:id', authMiddleware_1.authenticate, invoiceDetailController_1.getInvoiceDetailByIdController);
router.put('/:id', authMiddleware_1.authenticate, invoiceDetailController_1.updateInvoiceDetailController);
router.delete('/:id', authMiddleware_1.authenticate, invoiceDetailController_1.deleteInvoiceDetailController);
exports.default = router;
//# sourceMappingURL=invoiceDetailRoutes.js.map