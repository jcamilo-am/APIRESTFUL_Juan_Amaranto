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
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = void 0;
const index_1 = require("../index");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield index_1.User.findAll();
        return users;
    }
    catch (error) {
        throw new Error('Error al obtener los usuarios');
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield index_1.User.findByPk(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    }
    catch (error) {
        throw new Error('Error al obtener el usuario');
    }
});
exports.getUserById = getUserById;
const updateUser = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield index_1.User.findByPk(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        yield user.update(data);
        return user;
    }
    catch (error) {
        throw new Error('Error al actualizar el usuario');
    }
});
exports.updateUser = updateUser;
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield index_1.User.findByPk(userId);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        yield user.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar el usuario');
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userService.js.map