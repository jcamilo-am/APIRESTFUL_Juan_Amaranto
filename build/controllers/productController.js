"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = exports.updateProductController = exports.getProductByIdController = exports.getAllProductsController = exports.createProductController = void 0;
const productService_1 = require("../services/productService");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, productService_1.createProduct)(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.createProductController = createProductController;
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.getAllProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getAllProductsController = getAllProductsController;
const getProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, productService_1.getProductById)(Number(req.params.id));
        res.status(200).json(product);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getProductByIdController = getProductByIdController;
const updateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, productService_1.updateProduct)(Number(req.params.id), req.body);
        res.status(200).json(product);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.updateProductController = updateProductController;
const deleteProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, productService_1.deleteProduct)(Number(req.params.id));
        res.status(200).json({ message: 'Producto eliminado' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.deleteProductController = deleteProductController;
//# sourceMappingURL=productController.js.map