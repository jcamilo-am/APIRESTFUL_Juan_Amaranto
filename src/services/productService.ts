// ./services/productService.ts
import { Product } from '../index';

// Crear un producto
export const createProduct = async (data: { name: string; description?: string; price?: number }) => {
  try {
    const product = await Product.create(data);
    return product;
  } catch (error) {
    throw new Error('Error al crear el producto');
  }
};

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};

// Obtener un producto por ID
export const getProductById = async (productId: number) => {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
};

// Actualizar un producto
export const updateProduct = async (productId: number, data: { name?: string; description?: string; price?: number }) => {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    await product.update(data);
    return product;
  } catch (error) {
    throw new Error('Error al actualizar el producto');
  }
};

// Eliminar un producto
export const deleteProduct = async (productId: number) => {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    await product.destroy();
  } catch (error) {
    throw new Error('Error al eliminar el producto');
  }
};
