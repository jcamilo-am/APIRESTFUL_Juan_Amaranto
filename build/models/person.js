"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    class Person extends sequelize_1.Model {
        static associate(models) {
            Person.belongsTo(models.User, { foreignKey: 'UserId' });
        }
    }
    Person.init({
        FirstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        Phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        UserId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    }, {
        sequelize,
        modelName: 'Person',
        tableName: 'Person',
        timestamps: true,
    });
    console.log('Person model initialized');
    return Person;
};
//# sourceMappingURL=person.js.map