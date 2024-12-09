// ./models/Product.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

interface ProductAttributes {
  id?: number;
  name: string;
  description?: string;
  price?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default (sequelize: Sequelize) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
    public price!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'Product',
      timestamps: true,
      underscored: true,
    },
  );

  console.log('Product model initialized');

  return Product;
};
