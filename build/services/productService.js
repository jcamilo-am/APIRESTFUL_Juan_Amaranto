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
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const index_1 = require("../index");
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield index_1.Product.create(data);
        return product;
    }
    catch (error) {
        throw new Error('Error al crear el producto');
    }
});
exports.createProduct = createProduct;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield index_1.Product.findAll();
        return products;
    }
    catch (error) {
        throw new Error('Error al obtener los productos');
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield index_1.Product.findByPk(productId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }
    catch (error) {
        throw new Error('Error al obtener el producto');
    }
});
exports.getProductById = getProductById;
const updateProduct = (productId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield index_1.Product.findByPk(productId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        yield product.update(data);
        return product;
    }
    catch (error) {
        throw new Error('Error al actualizar el producto');
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield index_1.Product.findByPk(productId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        yield product.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar el producto');
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productService.js.map