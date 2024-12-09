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
exports.countRolesForUserController = exports.getRolesForUserController = exports.updateRolesForUserController = exports.deleteUserRoleController = exports.updateUserRoleController = exports.getUserRoleByIdController = exports.getAllUserRolesController = exports.createUserRoleController = void 0;
const userRoleService_1 = require("../services/userRoleService");
const createUserRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield (0, userRoleService_1.createUserRole)(req.body);
        res.status(201).json(userRole);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Server error" });
        }
    }
});
exports.createUserRoleController = createUserRoleController;
const getAllUserRolesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRoles = yield (0, userRoleService_1.getAllUserRoles)();
        res.status(200).json(userRoles);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Server error" });
        }
    }
});
exports.getAllUserRolesController = getAllUserRolesController;
const getUserRoleByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield (0, userRoleService_1.getUserRoleById)(req.params.id);
        res.status(200).json(userRole);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Server error" });
        }
    }
});
exports.getUserRoleByIdController = getUserRoleByIdController;
const updateUserRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRole = yield (0, userRoleService_1.updateUserRole)(req.params.id, req.body);
        res.status(200).json(userRole);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Server error" });
        }
    }
});
exports.updateUserRoleController = updateUserRoleController;
const deleteUserRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, userRoleService_1.deleteUserRole)(req.params.id);
        res.status(200).json({ message: "UserRole deleted" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Server error" });
        }
    }
});
exports.deleteUserRoleController = deleteUserRoleController;
const updateRolesForUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const { roleIds } = req.body;
        const result = yield (0, userRoleService_1.updateRolesForUser)(userId, roleIds);
        res.status(200).json(result);
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
exports.updateRolesForUserController = updateRolesForUserController;
const getRolesForUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const roles = yield (0, userRoleService_1.getRolesForUser)(userId);
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
exports.getRolesForUserController = getRolesForUserController;
const countRolesForUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const result = yield (0, userRoleService_1.countRolesForUser)(userId);
        res.status(200).json(result);
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
exports.countRolesForUserController = countRolesForUserController;
//# sourceMappingURL=userRoleController.js.map