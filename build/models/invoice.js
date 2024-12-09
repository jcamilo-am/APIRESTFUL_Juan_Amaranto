"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Invoice extends sequelize_1.Model {
        static associate(models) {
            Invoice.belongsTo(models.User, { foreignKey: 'UserId' });
            Invoice.hasMany(models.InvoiceDetails, { foreignKey: 'InvoiceId' });
        }
    }
    Invoice.init({
        UserId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Invoice',
        tableName: 'Invoice',
        timestamps: true,
        underscored: true,
    });
    console.log('Invoice model initialized');
    return Invoice;
};
//# sourceMappingURL=invoice.js.map