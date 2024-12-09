// ./middlewares/authMiddleware.ts
import jwt from 'jsonwebtoken';
import { User } from '../index';

export const authenticate = async (req: any, res: any, next: any) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extraer token del encabezado Authorization

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

  try {
    // Verificar el token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'camilo');
    const user = await User.findByPk(decoded.id);

    // Verificar si el usuario existe
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    req.user = user;  // Guardamos el usuario en el objeto request para poder acceder en las rutas
    next();  // Pasar al siguiente middleware o ruta
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token' });
    return;
  }
};
