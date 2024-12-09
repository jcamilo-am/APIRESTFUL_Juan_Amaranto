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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostSoldProducts = exports.getInvoicesByUser = exports.deleteProductFromInvoiceAndRecalculateTotal = exports.updateProductQuantityInInvoice = exports.getAllInvoicesWithProducts = exports.getInvoiceDetails = exports.deleteInvoice = exports.updateInvoice = exports.getInvoiceById = exports.getAllInvoices = exports.createInvoice = void 0;
const index_1 = require("../index");
const db_1 = __importDefault(require("../config/db"));
const createInvoice = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield index_1.Invoice.create(data);
        return invoice;
    }
    catch (error) {
        throw new Error('Error al crear la factura');
    }
});
exports.createInvoice = createInvoice;
const getAllInvoices = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield index_1.Invoice.findAll();
        return invoices;
    }
    catch (error) {
        throw new Error('Error al obtener las facturas');
    }
});
exports.getAllInvoices = getAllInvoices;
const getInvoiceById = (invoiceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield index_1.Invoice.findByPk(invoiceId);
        if (!invoice) {
            throw new Error('Factura no encontrada');
        }
        return invoice;
    }
    catch (error) {
        throw new Error('Error al obtener la factura');
    }
});
exports.getInvoiceById = getInvoiceById;
const updateInvoice = (invoiceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield index_1.Invoice.findByPk(invoiceId);
        if (!invoice) {
            throw new Error('Factura no encontrada');
        }
        yield invoice.update(data);
        return invoice;
    }
    catch (error) {
        throw new Error('Error al actualizar la factura');
    }
});
exports.updateInvoice = updateInvoice;
const deleteInvoice = (invoiceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield index_1.Invoice.findByPk(invoiceId);
        if (!invoice) {
            throw new Error('Factura no encontrada');
        }
        yield invoice.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar la factura');
    }
});
exports.deleteInvoice = deleteInvoice;
const getInvoiceDetails = (invoiceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = yield index_1.InvoiceDetails.findAll({ where: { InvoiceId: invoiceId } });
        return details;
    }
    catch (error) {
        throw new Error('Error al obtener los detalles de la factura');
    }
});
exports.getInvoiceDetails = getInvoiceDetails;
const getAllInvoicesWithProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield index_1.Invoice.findAll({
            include: [
                {
                    model: index_1.InvoiceDetails,
                    include: [
                        {
                            model: index_1.Product,
                        },
                    ],
                },
            ],
        });
        return invoices;
    }
    catch (error) {
        throw new Error('Error al obtener las facturas con los productos');
    }
});
exports.getAllInvoicesWithProducts = getAllInvoicesWithProducts;
const updateProductQuantityInInvoice = (invoiceDetailId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield index_1.InvoiceDetails.findByPk(invoiceDetailId);
        if (!invoiceDetail) {
            throw new Error('Detalle de factura no encontrado');
        }
        invoiceDetail.quantity = quantity;
        yield invoiceDetail.save();
        return invoiceDetail;
    }
    catch (error) {
        throw new Error('Error al actualizar la cantidad del producto en la factura');
    }
});
exports.updateProductQuantityInInvoice = updateProductQuantityInInvoice;
const deleteProductFromInvoiceAndRecalculateTotal = (invoiceDetailId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield index_1.InvoiceDetails.findByPk(invoiceDetailId);
        if (!invoiceDetail) {
            throw new Error('Detalle de factura no encontrado');
        }
        const invoice = yield index_1.Invoice.findByPk(invoiceDetail.InvoiceId);
        if (!invoice) {
            throw new Error('Factura no encontrada');
        }
        const product = yield index_1.Product.findByPk(invoiceDetail.ProductId);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        yield invoiceDetail.destroy();
        const invoiceDetails = yield index_1.InvoiceDetails.findAll({ where: { InvoiceId: invoice.id } });
        let newTotal = 0;
        for (const detail of invoiceDetails) {
            const product = yield index_1.Product.findByPk(detail.ProductId);
            if (product) {
                newTotal += detail.quantity * product.price;
            }
        }
        yield invoice.update({ total: newTotal });
        return invoice;
    }
    catch (error) {
        throw new Error('Error al eliminar el producto de la factura y recalcular el total');
    }
});
exports.deleteProductFromInvoiceAndRecalculateTotal = deleteProductFromInvoiceAndRecalculateTotal;
const getInvoicesByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield index_1.Invoice.findAll({
            where: { UserId: userId },
        });
        return invoices;
    }
    catch (error) {
        throw new Error('Error al obtener las facturas del usuario');
    }
});
exports.getInvoicesByUser = getInvoicesByUser;
const getMostSoldProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield index_1.InvoiceDetails.findAll({
            attributes: [
                'productId',
                [db_1.default.fn('SUM', db_1.default.col('quantity')), 'totalQuantity'],
            ],
            group: ['productId'],
            order: [[db_1.default.fn('SUM', db_1.default.col('quantity')), 'DESC']],
            limit: 10,
            include: [
                {
                    model: index_1.Product,
                    attributes: ['id', 'name', 'price'],
                },
            ],
        });
        return products;
    }
    catch (error) {
        throw new Error('Error al obtener los productos más vendidos');
    }
});
exports.getMostSoldProducts = getMostSoldProducts;
//# sourceMappingURL=invoiceService.js.map