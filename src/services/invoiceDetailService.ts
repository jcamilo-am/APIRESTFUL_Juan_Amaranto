// ./services/invoiceDetailService.ts
import { InvoiceDetails } from '../index';

// Crear un detalle de factura
export const createInvoiceDetail = async (data: { InvoiceId: number; ProductId: number; quantity: number }) => {
  try {
    const invoiceDetail = await InvoiceDetails.create(data);
    return invoiceDetail;
  } catch (error) {
    throw new Error('Error al crear el detalle de la factura');
  }
};

// Obtener todos los detalles de factura
export const getAllInvoiceDetails = async () => {
  try {
    const invoiceDetails = await InvoiceDetails.findAll();
    return invoiceDetails;
  } catch (error) {
    throw new Error('Error al obtener los detalles de factura');
  }
};

// Obtener un detalle de factura por ID
export const getInvoiceDetailById = async (invoiceDetailId: number) => {
  try {
    const invoiceDetail = await InvoiceDetails.findByPk(invoiceDetailId);
    if (!invoiceDetail) {
      throw new Error('Detalle de factura no encontrado');
    }
    return invoiceDetail;
  } catch (error) {
    throw new Error('Error al obtener el detalle de factura');
  }
};

// Actualizar un detalle de factura
export const updateInvoiceDetail = async (invoiceDetailId: number, data: { InvoiceId?: number; ProductId?: number; quantity?: number }) => {
  try {
    const invoiceDetail = await InvoiceDetails.findByPk(invoiceDetailId);
    if (!invoiceDetail) {
      throw new Error('Detalle de factura no encontrado');
    }
    await invoiceDetail.update(data);
    return invoiceDetail;
  } catch (error) {
    throw new Error('Error al actualizar el detalle de factura');
  }
};

// Eliminar un detalle de factura
export const deleteInvoiceDetail = async (invoiceDetailId: number) => {
  try {
    const invoiceDetail = await InvoiceDetails.findByPk(invoiceDetailId);
    if (!invoiceDetail) {
      throw new Error('Detalle de factura no encontrado');
    }
    await invoiceDetail.destroy();
  } catch (error) {
    throw new Error('Error al eliminar el detalle de factura');
  }
};
