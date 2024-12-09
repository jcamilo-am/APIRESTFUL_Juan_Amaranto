"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Role extends sequelize_1.Model {
        static associate(model) {
            Role.belongsToMany(model.User, { through: 'UserRole' });
        }
    }
    Role.init({
        Name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        sequelize,
        modelName: 'Role',
        tableName: 'Role',
        timestamps: true,
    });
    console.log('Role model initialized');
    return Role;
};
//# sourceMappingURL=role.js.map