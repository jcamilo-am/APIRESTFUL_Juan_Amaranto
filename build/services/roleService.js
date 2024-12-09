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
exports.getRoleByName = exports.getTotalRoles = exports.deleteRole = exports.updateRole = exports.getRoleById = exports.getAllRoles = exports.createRole = void 0;
const index_1 = require("../index");
const createRole = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield index_1.Role.create(data);
        return role;
    }
    catch (error) {
        throw new Error('Error al crear el rol');
    }
});
exports.createRole = createRole;
const getAllRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield index_1.Role.findAll();
        return roles;
    }
    catch (error) {
        throw new Error('Error al obtener los roles');
    }
});
exports.getAllRoles = getAllRoles;
const getRoleById = (roleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield index_1.Role.findByPk(roleId);
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        return role;
    }
    catch (error) {
        throw new Error('Error al obtener el rol');
    }
});
exports.getRoleById = getRoleById;
const updateRole = (roleId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield index_1.Role.findByPk(roleId);
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        yield role.update(data);
        return role;
    }
    catch (error) {
        throw new Error('Error al actualizar el rol');
    }
});
exports.updateRole = updateRole;
const deleteRole = (roleId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield index_1.Role.findByPk(roleId);
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        yield role.destroy();
    }
    catch (error) {
        throw new Error('Error al eliminar el rol');
    }
});
exports.deleteRole = deleteRole;
const getTotalRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRoles = yield index_1.Role.count();
        return totalRoles;
    }
    catch (error) {
        throw new Error('Error al obtener el total de roles');
    }
});
exports.getTotalRoles = getTotalRoles;
const getRoleByName = (roleName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield index_1.Role.findOne({
            where: {
                Name: roleName,
            },
        });
        if (!role) {
            throw new Error('Rol no encontrado');
        }
        return role;
    }
    catch (error) {
        throw new Error('Error al obtener el rol por nombre');
    }
});
exports.getRoleByName = getRoleByName;
//# sourceMappingURL=roleService.js.map