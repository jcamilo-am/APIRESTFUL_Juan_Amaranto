// ./services/invoiceService.ts
import { Invoice, InvoiceDetails, Product } from '../index';
import sequelize from '../config/db';

// Crear una factura
export const createInvoice = async (data: { UserId: number; total?: number }) => {
  try {
    const invoice = await Invoice.create(data);
    return invoice;
  } catch (error) {
    throw new Error('Error al crear la factura');
  }
};

// Obtener todas las facturas
export const getAllInvoices = async () => {
  try {
    const invoices = await Invoice.findAll();
    return invoices;
  } catch (error) {
    throw new Error('Error al obtener las facturas');
  }
};

// Obtener una factura por ID
export const getInvoiceById = async (invoiceId: number) => {
  try {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      throw new Error('Factura no encontrada');
    }
    return invoice;
  } catch (error) {
    throw new Error('Error al obtener la factura');
  }
};

// Actualizar una factura
export const updateInvoice = async (invoiceId: number, data: { idUser?: number; total?: number }) => {
  try {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      throw new Error('Factura no encontrada');
    }
    await invoice.update(data);
    return invoice;
  } catch (error) {
    throw new Error('Error al actualizar la factura');
  }
};

// Eliminar una factura
export const deleteInvoice = async (invoiceId: number) => {
  try {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      throw new Error('Factura no encontrada');
    }
    await invoice.destroy();
  } catch (error) {
    throw new Error('Error al eliminar la factura');
  }
};

// Obtener detalles de una factura
export const getInvoiceDetails = async (invoiceId: number) => {
  try {
    const details = await InvoiceDetails.findAll({ where: { InvoiceId: invoiceId } });
    return details;
  } catch (error) {
    throw new Error('Error al obtener los detalles de la factura');
  }
};

// Obtener todas las facturas con los productos relacionados
export const getAllInvoicesWithProducts = async () => {
  try {
    const invoices = await Invoice.findAll({
      include: [
        {
          model: InvoiceDetails,
          include: [
            {
              model: Product,
            },
          ],
        },
      ],
    });
    return invoices;
  } catch (error) {
    throw new Error('Error al obtener las facturas con los productos');
  }
};

// Actualizar la cantidad de un producto en una factura
export const updateProductQuantityInInvoice = async (invoiceDetailId: number, quantity: number) => {
  try {
    // Buscar el detalle de la factura
    const invoiceDetail = await InvoiceDetails.findByPk(invoiceDetailId);

    if (!invoiceDetail) {
      throw new Error('Detalle de factura no encontrado');
    }

    // Actualizar la cantidad
    invoiceDetail.quantity = quantity;
    await invoiceDetail.save();

    return invoiceDetail;
  } catch (error) {
    throw new Error('Error al actualizar la cantidad del producto en la factura');
  }
};

export const deleteProductFromInvoiceAndRecalculateTotal = async (invoiceDetailId: number) => {
  try {
    // Buscar el detalle de la factura
    const invoiceDetail = await InvoiceDetails.findByPk(invoiceDetailId);
    if (!invoiceDetail) {
      throw new Error('Detalle de factura no encontrado');
    }

    // Obtener la factura a la que pertenece este detalle
    const invoice = await Invoice.findByPk(invoiceDetail.InvoiceId);
    if (!invoice) {
      throw new Error('Factura no encontrada');
    }

    // Obtener el producto asociado con este detalle de la factura
    const product = await Product.findByPk(invoiceDetail.ProductId);
    if (!product) {
      throw new Error('Producto no encontrado');
    }

    // Eliminar el detalle de la factura
    await invoiceDetail.destroy();

    // Recalcular el total de la factura
    const invoiceDetails = await InvoiceDetails.findAll({ where: { InvoiceId: invoice.id } });

    // Calcular el nuevo total sumando los totales de los productos restantes
    let newTotal = 0;
    for (const detail of invoiceDetails) {
      // Usamos el precio del producto relacionado con este detalle
      const product = await Product.findByPk(detail.ProductId); // Obtener el producto de nuevo
      if (product) {
        newTotal += detail.quantity * product.price; // Recalcular con el precio del producto
      }
    }

    // Actualizar el total en la factura
    await invoice.update({ total: newTotal });

    return invoice;  // Devolver la factura con el total actualizado
  } catch (error) {
    throw new Error('Error al eliminar el producto de la factura y recalcular el total');
  }
};

// Obtener todas las facturas de un usuario
export const getInvoicesByUser = async (userId: number) => {
  try {
    const invoices = await Invoice.findAll({
      where: { UserId: userId }, // Filtramos por el UserId
    });
    return invoices;
  } catch (error) {
    throw new Error('Error al obtener las facturas del usuario');
  }
};

// Obtener los productos más vendidos
export const getMostSoldProducts = async () => {
  try {
    // Aquí buscamos los productos con la mayor cantidad total de unidades vendidas
    const products = await InvoiceDetails.findAll({
      attributes: [
        'productId', // Suponiendo que InvoiceDetail tiene un productId
        [sequelize.fn('SUM', sequelize.col('quantity')), 'totalQuantity'], // Sumamos las cantidades
      ],
      group: ['productId'], // Agrupamos por el ID del producto
      order: [[sequelize.fn('SUM', sequelize.col('quantity')), 'DESC']], // Ordenamos por la cantidad total de unidades
      limit: 10, // Limitamos los resultados a los 10 productos más vendidos
      include: [
        {
          model: Product, // Incluimos la información del producto
          attributes: ['id', 'name', 'price'], // Suponiendo que el producto tiene estos atributos
        },
      ],
    });

    return products;
  } catch (error) {
    throw new Error('Error al obtener los productos más vendidos');
  }
};

