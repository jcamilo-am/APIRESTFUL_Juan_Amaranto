// ./models/InvoiceDetails.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import { Invoice } from '../index'; // Relación con Invoice
import { Product } from '../index'; // Relación con Product

interface InvoiceDetailsAttributes {
  id?: number;
  InvoiceId: number;
  ProductId: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default (sequelize: Sequelize) => {
  class InvoiceDetails extends Model<InvoiceDetailsAttributes> implements InvoiceDetailsAttributes {
    public id!: number;
    public InvoiceId!: number;
    public ProductId!: number;
    public quantity!: number;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: { Invoice: typeof Invoice, Product: typeof Product }) {
      InvoiceDetails.belongsTo(models.Invoice, { foreignKey: 'InvoiceId' });
      InvoiceDetails.belongsTo(models.Product, { foreignKey: 'ProductId' });
    }
  }

  InvoiceDetails.init(
    {
      InvoiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'InvoiceDetails',
      tableName: 'InvoiceDetails',
      timestamps: true,
      underscored: true,
    },
  );

  console.log('InvoiceDetails model initialized');

  return InvoiceDetails;
};
