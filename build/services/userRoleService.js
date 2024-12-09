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
exports.countRolesForUser = exports.getRolesForUser = exports.updateRolesForUser = exports.deleteUserRole = exports.updateUserRole = exports.getUserRoleById = exports.getAllUserRoles = exports.createUserRole = void 0;
const index_1 = require("../index");
const index_2 = require("../index");
const createUserRole = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield index_1.UserRole.create(data);
        return userRole;
    }
    catch (error) {
        throw new Error("Error al crear la relación usuario-rol");
    }
});
exports.createUserRole = createUserRole;
const getAllUserRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRoles = yield index_1.UserRole.findAll();
        return userRoles;
    }
    catch (error) {
        throw new Error("Error al obtener las relaciones usuario-rol");
    }
});
exports.getAllUserRoles = getAllUserRoles;
const getUserRoleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield index_1.UserRole.findByPk(id);
        if (!userRole) {
            throw new Error("Relación usuario-rol no encontrada");
        }
        return userRole;
    }
    catch (error) {
        throw new Error("Error al obtener la relación usuario-rol");
    }
});
exports.getUserRoleById = getUserRoleById;
const updateUserRole = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield index_1.UserRole.findByPk(id);
        if (!userRole) {
            throw new Error("Relación usuario-rol no encontrada");
        }
        yield userRole.update(data);
        return userRole;
    }
    catch (error) {
        throw new Error("Error al actualizar la relación usuario-rol");
    }
});
exports.updateUserRole = updateUserRole;
const deleteUserRole = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield index_1.UserRole.findByPk(id);
        if (!userRole) {
            throw new Error("Relación usuario-rol no encontrada");
        }
        yield userRole.destroy();
    }
    catch (error) {
        throw new Error("Error al eliminar la relación usuario-rol");
    }
});
exports.deleteUserRole = deleteUserRole;
const updateRolesForUser = (userId, roleIds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.UserRole.destroy({
            where: {
                UserId: userId,
            },
        });
        for (let roleId of roleIds) {
            yield index_1.UserRole.create({
                UserId: userId,
                RoleId: roleId,
            });
        }
        return { message: "Roles actualizados correctamente" };
    }
    catch (error) {
        throw new Error("Error al actualizar los roles del usuario");
    }
});
exports.updateRolesForUser = updateRolesForUser;
const getRolesForUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield index_1.UserRole.findAll({
            where: { UserId: userId },
            include: [
                {
                    model: index_2.Role,
                    attributes: ['id', 'Name'],
                },
            ],
        });
        return roles;
    }
    catch (error) {
        throw new Error("Error al obtener los roles del usuario");
    }
});
exports.getRolesForUser = getRolesForUser;
const countRolesForUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleCount = yield index_1.UserRole.count({
            where: {
                UserId: userId,
            },
        });
        return { totalRoles: roleCount };
    }
    catch (error) {
        throw new Error("Error al contar los roles del usuario");
    }
});
exports.countRolesForUser = countRolesForUser;
//# sourceMappingURL=userRoleService.js.map