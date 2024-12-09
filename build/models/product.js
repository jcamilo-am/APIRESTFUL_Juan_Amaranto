"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Product extends sequelize_1.Model {
    }
    Product.init({
        name: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Product',
        tableName: 'Product',
        timestamps: true,
        underscored: true,
    });
    console.log('Product model initialized');
    return Product;
};
//# sourceMappingURL=product.js.map