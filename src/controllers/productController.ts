// ./controllers/productController.ts
import { Request, Response } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../services/productService';

// Crear un producto
export const createProductController = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener todos los productos
export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Obtener un producto por ID
export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(Number(req.params.id));
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Actualizar un producto
export const updateProductController = async (req: Request, res: Response) => {
  try {
    const product = await updateProduct(Number(req.params.id), req.body);
    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

// Eliminar un producto
export const deleteProductController = async (req: Request, res: Response) => {
  try {
    await deleteProduct(Number(req.params.id));
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Server error' });
    }
  }
};
