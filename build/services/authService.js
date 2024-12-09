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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.validateUser = void 0;
const index_1 = require("../index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Buscando usuario con email:', email);
    const user = yield index_1.User.findOne({ where: { Email: email } });
    if (!user) {
        console.log('Usuario no encontrado:', email);
        return null;
    }
    return user;
});
exports.validateUser = validateUser;
const generateToken = (userId) => {
    const token = jsonwebtoken_1.default.sign({ id: userId }, process.env.JWT_SECRET || 'camilo', {
        expiresIn: '1h',
    });
    console.log('Token generado:', token);
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=authService.js.map