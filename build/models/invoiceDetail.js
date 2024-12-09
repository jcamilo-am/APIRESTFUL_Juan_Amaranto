"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class InvoiceDetails extends sequelize_1.Model {
        static associate(models) {
            InvoiceDetails.belongsTo(models.Invoice, { foreignKey: 'InvoiceId' });
            InvoiceDetails.belongsTo(models.Product, { foreignKey: 'ProductId' });
        }
    }
    InvoiceDetails.init({
        InvoiceId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        ProductId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'InvoiceDetails',
        tableName: 'InvoiceDetails',
        timestamps: true,
        underscored: true,
    });
    console.log('InvoiceDetails model initialized');
    return InvoiceDetails;
};
//# sourceMappingURL=invoiceDetail.js.map