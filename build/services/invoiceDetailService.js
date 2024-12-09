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
exports.deleteInvoiceDetail = exports.updateInvoiceDetail = exports.getInvoiceDetailById = exports.getAllInvoiceDetails = exports.createInvoiceDetail = void 0;
const index_1 = require("../index");
const createInvoiceDetail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield index_1.InvoiceDetails.create(data);
        return invoiceDetail;
    }
    catch (error) {
        throw new Error('Error al crear el detalle de la factura');
    }
});
exports.createInvoiceDetail = createInvoiceDetail;
const getAllInvoiceDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetails = yield index_1.InvoiceDetails.findAll();
        return invoiceDetails;
    }
    catch (error) {
        throw new Error('Error al obtener los detalles de factura');
    }
});
exports.getAllInvoiceDetails = getAllInvoiceDetails;
const getInvoiceDetailById = (invoiceDetailId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield index_1.InvoiceDetails.findByPk(invoiceDetailId);
        if (!invoiceDetail) {
            throw new Error('Detalle de factura no encontrado');
        }
        return invoiceDetail;
    }
    catch (error) {
        throw new Error('Error al obtener el detalle de factura');
    }
});
exports.getInvoiceDetailById = getInvoiceDetailById;
const updateInvoiceDetail = (invoiceDetailId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield index_1.InvoiceDetails.findByPk(invoiceDetailId);
        if (!invoiceDetail) {
            throw new Error('Detalle de factura no encontrado');
        }
        yield invoiceDetail.update(data);
        return invoiceDetail;
    }
    catch (error) {
        throw new Error('Error al actualizar el detalle de factura');
    }
});
exports.updateInvoiceDetail = updateInvoiceDetail;
const deleteInvoiceDetail = (invoiceDetailId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoiceDetail = yield index_1.InvoiceDetails.findByPk(invoiceDetailId);
        if (!invoiceDetail) {
            throw new Error('Detalle de factura no encontrado');
        }
        yield invoiceDetail.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar el detalle de factura');
    }
});
exports.deleteInvoiceDetail = deleteInvoiceDetail;
//# sourceMappingURL=invoiceDetailService.js.map