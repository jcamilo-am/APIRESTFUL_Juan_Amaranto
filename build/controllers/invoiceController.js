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
exports.getMostSoldProductsController = exports.getInvoicesByUserController = exports.deleteProductFromInvoiceController = exports.updateProductQuantityInInvoiceController = exports.getAllInvoicesWithProductsController = exports.getInvoiceDetailsController = exports.deleteInvoiceController = exports.updateInvoiceController = exports.getInvoiceByIdController = exports.getAllInvoicesController = exports.createInvoiceController = void 0;
const invoiceService_1 = require("../services/invoiceService");
const createInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield (0, invoiceService_1.createInvoice)(req.body);
        res.status(201).json(invoice);
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
exports.createInvoiceController = createInvoiceController;
const getAllInvoicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.getAllInvoices)();
        res.status(200).json(invoices);
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
exports.getAllInvoicesController = getAllInvoicesController;
const getInvoiceByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield (0, invoiceService_1.getInvoiceById)(Number(req.params.id));
        res.status(200).json(invoice);
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
exports.getInvoiceByIdController = getInvoiceByIdController;
const updateInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield (0, invoiceService_1.updateInvoice)(Number(req.params.id), req.body);
        res.status(200).json(invoice);
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
exports.updateInvoiceController = updateInvoiceController;
const deleteInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, invoiceService_1.deleteInvoice)(Number(req.params.id));
        res.status(200).json({ message: 'Factura eliminada' });
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
exports.deleteInvoiceController = deleteInvoiceController;
const getInvoiceDetailsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = yield (0, invoiceService_1.getInvoiceDetails)(Number(req.params.id));
        res.status(200).json(details);
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
exports.getInvoiceDetailsController = getInvoiceDetailsController;
const getAllInvoicesWithProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceService_1.getAllInvoicesWithProducts)();
        res.status(200).json(invoices);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getAllInvoicesWithProductsController = getAllInvoicesWithProductsController;
const updateProductQuantityInInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { invoiceDetailId, quantity } = req.body;
    try {
        const updatedInvoiceDetail = yield (0, invoiceService_1.updateProductQuantityInInvoice)(invoiceDetailId, quantity);
        res.status(200).json(updatedInvoiceDetail);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.updateProductQuantityInInvoiceController = updateProductQuantityInInvoiceController;
const deleteProductFromInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { invoiceDetailId } = req.params;
    try {
        const updatedInvoice = yield (0, invoiceService_1.deleteProductFromInvoiceAndRecalculateTotal)(Number(invoiceDetailId));
        res.status(200).json({
            message: 'Producto eliminado y total recalculado',
            invoice: updatedInvoice,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteProductFromInvoiceController = deleteProductFromInvoiceController;
const getInvoicesByUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = Number(req.params.userId);
    try {
        const invoices = yield (0, invoiceService_1.getInvoicesByUser)(userId);
        if (invoices.length === 0) {
            res.status(404).json({ message: 'No se encontraron facturas para el usuario' });
            return;
        }
        res.status(200).json(invoices);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getInvoicesByUserController = getInvoicesByUserController;
const getMostSoldProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, invoiceService_1.getMostSoldProducts)();
        if (!products || products.length === 0) {
            res.status(404).json({ message: 'No se encontraron productos más vendidos' });
            return;
        }
        res.status(200).json(products);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getMostSoldProductsController = getMostSoldProductsController;
//# sourceMappingURL=invoiceController.js.map