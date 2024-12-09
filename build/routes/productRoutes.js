"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticate, productController_1.createProductController);
router.get('/', authMiddleware_1.authenticate, productController_1.getAllProductsController);
router.get('/:id', authMiddleware_1.authenticate, productController_1.getProductByIdController);
router.put('/:id', authMiddleware_1.authenticate, productController_1.updateProductController);
router.delete('/:id', authMiddleware_1.authenticate, productController_1.deleteProductController);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map