// ./config/db.ts
import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME || 'backend_db',  
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'developer',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: "mysql",
  }
)

export default sequelize;