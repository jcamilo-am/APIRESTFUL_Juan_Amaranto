// ./models/userRole.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from '../index';
import { Role } from '../index';

export default (sequelize: Sequelize) => {
  class UserRole extends Model {
    static associate(models: { User: typeof User, Role: typeof Role }) {
      User.belongsToMany(models.Role, { through: 'UserRole' });
      Role.belongsToMany(models.User, { through: 'UserRole' });
    }
  }

  // Definimos el modelo UserRole
  UserRole.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      RoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Role,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserRole',
      tableName: 'UserRole',
      timestamps: false,
    },
  );

  console.log('UserRole model initialized');
  
  return UserRole;
};
