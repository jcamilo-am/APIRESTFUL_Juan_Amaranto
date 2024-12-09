// ./models/user.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import { Role } from '../index';
import { Person } from '../index';

interface UserAttributes {
  id?: number;
  Email: string;
  Password: string;
}

export default (sequelize: Sequelize) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public Email!: string;
    public Password!: string;

    static associate(models: { Role: typeof Role, Person: typeof Person }) {
      User.hasOne(models.Person, { foreignKey: 'UserId' });
      User.belongsToMany(models.Role, { through: 'UserRole' });
    }
  }

  User.init(
    {
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'User',
      timestamps: true
    },
  );

  console.log('User model initialized');

  return User;
};
