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
exports.deleteInvoiceDetailController = exports.updateInvoiceDetailController = exports.getInvoiceDetailByIdController = exports.getAllInvoiceDetailsController = exports.createInvoiceDetailController = void 0;
const invoiceDetailService_1 = require("../services/invoiceDetailService");
const createInvoiceDetailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield (0, invoiceDetailService_1.createInvoiceDetail)(req.body);
        res.status(201).json(invoiceDetail);
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
exports.createInvoiceDetailController = createInvoiceDetailController;
const getAllInvoiceDetailsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetails = yield (0, invoiceDetailService_1.getAllInvoiceDetails)();
        res.status(200).json(invoiceDetails);
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
exports.getAllInvoiceDetailsController = getAllInvoiceDetailsController;
const getInvoiceDetailByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield (0, invoiceDetailService_1.getInvoiceDetailById)(Number(req.params.id));
        res.status(200).json(invoiceDetail);
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
exports.getInvoiceDetailByIdController = getInvoiceDetailByIdController;
const updateInvoiceDetailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield (0, invoiceDetailService_1.updateInvoiceDetail)(Number(req.params.id), req.body);
        res.status(200).json(invoiceDetail);
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
exports.updateInvoiceDetailController = updateInvoiceDetailController;
const deleteInvoiceDetailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, invoiceDetailService_1.deleteInvoiceDetail)(Number(req.params.id));
        res.status(200).json({ message: 'Detalle de factura eliminado' });
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
exports.deleteInvoiceDetailController = deleteInvoiceDetailController;
//# sourceMappingURL=invoiceDetailController.js.map