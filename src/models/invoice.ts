// ./models/Invoice.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import { User, InvoiceDetails } from '../index';

interface InvoiceAttributes {
  id?: number;
  UserId: number;
  total?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default (sequelize: Sequelize) => {
  class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
    public id!: number;
    public UserId!: number;
    public total!: number;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: { User: typeof User, InvoiceDetails: typeof InvoiceDetails }) {
      Invoice.belongsTo(models.User, { foreignKey: 'UserId' });
      Invoice.hasMany(models.InvoiceDetails, { foreignKey: 'InvoiceId' });
    }
  }

  Invoice.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Invoice',
      tableName: 'Invoice',
      timestamps: true,
      underscored: true,
    },
  );

  console.log('Invoice model initialized');

  return Invoice;
};
