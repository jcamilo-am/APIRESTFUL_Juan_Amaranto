"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const authService_1 = require("../services/authService");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password } = req.body;
    try {
        console.log('Request body:', { Email, Password });
        const user = yield (0, authService_1.validateUser)(Email, Password);
        if (!user) {
            console.log('Usuario no encontrado o contraseña incorrecta');
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        console.log('Usuario validado:', user);
        const token = (0, authService_1.generateToken)(user.id.toString());
        console.log('Token generado:', token);
        res.json({ token });
    }
    catch (error) {
        console.error('Error en el controlador de login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
exports.loginController = loginController;
//# sourceMappingURL=authController.js.map