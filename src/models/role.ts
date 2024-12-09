// ./models/role.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from '../index';

export default (sequelize: Sequelize) => {
  class Role extends Model {
    static associate(model: { User: typeof User }) {
      Role.belongsToMany(model.User, { through: 'UserRole' }); // Cambiar el nombre de la tabla intermedia a PascalCase
    }
  }

  // Definimos el modelo Role
  Role.init(
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Role',
      tableName: 'Role',
      timestamps: true,
    },
  );

  console.log('Role model initialized');
  
  return Role;
}
