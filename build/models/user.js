"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.hasOne(models.Person, { foreignKey: 'UserId' });
            User.belongsToMany(models.Role, { through: 'UserRole' });
        }
    }
    User.init({
        Email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        Password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'User',
        timestamps: true
    });
    console.log('User model initialized');
    return User;
};
//# sourceMappingURL=user.js.map