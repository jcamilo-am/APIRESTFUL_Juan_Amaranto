// ./index.ts
import { server, PORT } from './server';
import sequelize from './config/db';

import UserModel from './models/user';
import PersonModel from './models/person';
import RoleModel from './models/role';
import UserRoleModel from './models/userRole';
import InvoiceModel from './models/invoice';
import InvoiceDetailModel from './models/invoiceDetail';
import ProductModel from './models/product'; 


// inicializamos los modelos
const User = UserModel(sequelize);
const Role = RoleModel(sequelize);
const UserRole = UserRoleModel(sequelize);
const Person = PersonModel(sequelize);
const Invoice = InvoiceModel(sequelize);
const InvoiceDetails = InvoiceDetailModel(sequelize);
const Product = ProductModel(sequelize);

// Asociamos los modelos
User.associate?.({ Person, Role });
Role.associate?.({ User });
UserRole.associate?.({ User, Role });
Person.associate?.({ User });
Invoice.associate?.({ User, InvoiceDetails });
InvoiceDetails.associate?.({ Invoice, Product });

// exportamos los modelos
export { User, Person, Role, UserRole, Invoice, InvoiceDetails, Product };


// funcion para conectar a la base de datos
const connectDatabase = async () => {
  try {
    // verificamos la conexión a la base de datos
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // sincronizamos los modelos con la base de datos
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

// conectamos a la base de datos
connectDatabase()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`
        Server running on http://localhost:${PORT}
        Link: http://localhost:${PORT}         
      `);
    })
  })