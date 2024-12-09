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
exports.getRoleByNameController = exports.getTotalRolesController = exports.deleteRoleController = exports.updateRoleController = exports.getRoleByIdController = exports.getAllRolesController = exports.createRoleController = void 0;
const roleService_1 = require("../services/roleService");
const createRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, roleService_1.createRole)(req.body);
        res.status(201).json(role);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.createRoleController = createRoleController;
const getAllRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield (0, roleService_1.getAllRoles)();
        res.status(200).json(roles);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getAllRolesController = getAllRolesController;
const getRoleByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, roleService_1.getRoleById)(req.params.id);
        res.status(200).json(role);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getRoleByIdController = getRoleByIdController;
const updateRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield (0, roleService_1.updateRole)(req.params.id, req.body);
        res.status(200).json(role);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.updateRoleController = updateRoleController;
const deleteRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, roleService_1.deleteRole)(req.params.id);
        res.status(200).json({ message: 'Rol eliminado' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.deleteRoleController = deleteRoleController;
const getTotalRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRoles = yield (0, roleService_1.getTotalRoles)();
        res.status(200).json({ totalRoles });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getTotalRolesController = getTotalRolesController;
const getRoleByNameController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roleName = req.params.name;
        const role = yield (0, roleService_1.getRoleByName)(roleName);
        res.status(200).json(role);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});
exports.getRoleByNameController = getRoleByNameController;
//# sourceMappingURL=roleController.js.map