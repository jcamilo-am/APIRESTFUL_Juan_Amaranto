// ./app.ts
import express, { Express } from 'express';

import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
import personRoutes from './routes/personRoutes';
import roleRoutes from './routes/roleRoutes';
import userRoleRoutes from './routes/userRoleRoutes';
import productRoutes from './routes/productRoutes';
import invoiceRoutes from './routes/invoiceRoutes';
import invoiceDetailsRoutes from './routes/invoiceDetailRoutes';

dotenv.config();
const server: Express = express();
const PORT: string | number = process.env.PORT || 8080;

server.use(helmet()); // middleware para proteger la app de algunas vulnerabilidades conocidas
server.use(express.json()); // middleware para parsear el body de las peticiones
server.use(express.urlencoded({ extended: true })); // middleware para parsear el body de las peticiones
server.use(morgan('dev')); // middleware para loggear las peticiones

// Rutas
server.use('/users', userRoutes);
server.use('/person', personRoutes);
server.use('/role', roleRoutes);
server.use('/userRole', userRoleRoutes);
server.use('/product', productRoutes);
server.use('/invoice', invoiceRoutes);
server.use('/invoiceDetail', invoiceDetailsRoutes);

export { server, PORT };