// ./controllers/invoiceController.ts
import { Request, Response } from 'express';
import {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
  getInvoiceDetails,
  getAllInvoicesWithProducts,
  updateProductQuantityInInvoice,
  deleteProductFromInvoiceAndRecalculateTotal,
  getInvoicesByUser,
  getMostSoldProducts,
} from '../services/invoiceService';

// Crear una factura
export const createInvoiceController = async (req: Request, res: Response) => {
  try {
    const invoice = await createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener todas las facturas
export const getAllInvoicesController = async (req: Request, res: Response) => {
  try {
    const invoices = await getAllInvoices();
    res.status(200).json(invoices);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener una factura por ID
export const getInvoiceByIdController = async (req: Request, res: Response) => {
  try {
    const invoice = await getInvoiceById(Number(req.params.id));
    res.status(200).json(invoice);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Actualizar una factura
export const updateInvoiceController = async (req: Request, res: Response) => {
  try {
    const invoice = await updateInvoice(Number(req.params.id), req.body);
    res.status(200).json(invoice);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Eliminar una factura
export const deleteInvoiceController = async (req: Request, res: Response) => {
  try {
    await deleteInvoice(Number(req.params.id));
    res.status(200).json({ message: 'Factura eliminada' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener los detalles de una factura
export const getInvoiceDetailsController = async (req: Request, res: Response) => {
  try {
    const details = await getInvoiceDetails(Number(req.params.id));
    res.status(200).json(details);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener todas las facturas con los productos relacionados
export const getAllInvoicesWithProductsController = async (req: Request, res: Response) => {
  try {
    const invoices = await getAllInvoicesWithProducts();
    res.status(200).json(invoices);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Actualizar la cantidad de un producto en una factura
export const updateProductQuantityInInvoiceController = async (req: Request, res: Response) => {
  const { invoiceDetailId, quantity } = req.body;

  try {
    // Llamar al servicio para actualizar la cantidad
    const updatedInvoiceDetail = await updateProductQuantityInInvoice(invoiceDetailId, quantity);

    res.status(200).json(updatedInvoiceDetail);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Eliminar un producto de la factura y recalcular el total
export const deleteProductFromInvoiceController = async (req: Request, res: Response) => {
  const { invoiceDetailId } = req.params; // ID del detalle de la factura

  try {
    // Llamamos al servicio para eliminar el producto y recalcular el total
    const updatedInvoice = await deleteProductFromInvoiceAndRecalculateTotal(Number(invoiceDetailId));

    // Respondemos con la factura actualizada
    res.status(200).json({
      message: 'Producto eliminado y total recalculado',
      invoice: updatedInvoice,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Obtener todas las facturas de un usuario
export const getInvoicesByUserController = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId); // Obtenemos el ID del usuario desde los parámetros

  try {
    const invoices = await getInvoicesByUser(userId); // Llamamos al servicio para obtener las facturas

    if (invoices.length === 0) {
      res.status(404).json({ message: 'No se encontraron facturas para el usuario' });
      return; 
    }

    res.status(200).json(invoices); // Respondemos con las facturas del usuario
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// Obtener los productos más vendidos
export const getMostSoldProductsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getMostSoldProducts();

    if (!products || products.length === 0) {
      res.status(404).json({ message: 'No se encontraron productos más vendidos' });
      return;
    }

    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
