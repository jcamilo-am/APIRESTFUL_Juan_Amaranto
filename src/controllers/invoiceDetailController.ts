// ./controllers/invoiceDetailController.ts
import { Request, Response } from 'express';
import {
  createInvoiceDetail,
  getAllInvoiceDetails,
  getInvoiceDetailById,
  updateInvoiceDetail,
  deleteInvoiceDetail
} from '../services/invoiceDetailService';

// Crear un detalle de factura
export const createInvoiceDetailController = async (req: Request, res: Response) => {
  try {
    const invoiceDetail = await createInvoiceDetail(req.body);
    res.status(201).json(invoiceDetail);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener todos los detalles de factura
export const getAllInvoiceDetailsController = async (req: Request, res: Response) => {
  try {
    const invoiceDetails = await getAllInvoiceDetails();
    res.status(200).json(invoiceDetails);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener un detalle de factura por ID
export const getInvoiceDetailByIdController = async (req: Request, res: Response) => {
  try {
    const invoiceDetail = await getInvoiceDetailById(Number(req.params.id));
    res.status(200).json(invoiceDetail);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Actualizar un detalle de factura
export const updateInvoiceDetailController = async (req: Request, res: Response) => {
  try {
    const invoiceDetail = await updateInvoiceDetail(Number(req.params.id), req.body);
    res.status(200).json(invoiceDetail);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Eliminar un detalle de factura
export const deleteInvoiceDetailController = async (req: Request, res: Response) => {
  try {
    await deleteInvoiceDetail(Number(req.params.id));
    res.status(200).json({ message: 'Detalle de factura eliminado' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};
