// ./models/person.ts
import { Model, DataTypes, Sequelize } from "sequelize";
import { User } from "../index";

export default (sequelize: Sequelize) => {
  class Person extends Model {
    static associate(models: { User: typeof User }) {
      Person.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  }

  // Definimos el modelo Person
  Person.init(
    {
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'Person',
      timestamps: true,
    },
  );

  console.log('Person model initialized');

  return Person;
}
