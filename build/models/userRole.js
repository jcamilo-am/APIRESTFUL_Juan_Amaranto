"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
const index_2 = require("../index");
exports.default = (sequelize) => {
    class UserRole extends sequelize_1.Model {
        static associate(models) {
            index_1.User.belongsToMany(models.Role, { through: 'UserRole' });
            index_2.Role.belongsToMany(models.User, { through: 'UserRole' });
        }
    }
    UserRole.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        UserId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: index_1.User,
                key: 'id',
            },
        },
        RoleId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: index_2.Role,
                key: 'id',
            },
        },
    }, {
        sequelize,
        modelName: 'UserRole',
        tableName: 'UserRole',
        timestamps: false,
    });
    console.log('UserRole model initialized');
    return UserRole;
};
//# sourceMappingURL=userRole.js.map