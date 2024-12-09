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
exports.deleteUserController = exports.updateUserController = exports.getAUserByIdController = exports.getAllUsersController = void 0;
const userService_1 = require("../services/userService");
const getAllUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUsers)();
        res.status(200).json(users);
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
exports.getAllUsersController = getAllUsersController;
const getAUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userService_1.getUserById)(req.params.id);
        res.status(200).json(user);
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
exports.getAUserByIdController = getAUserByIdController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userService_1.updateUser)(req.params.id, req.body);
        res.status(200).json(user);
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
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, userService_1.deleteUser)(req.params.id);
        res.status(200).json({ message: 'User deleted' });
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
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=userController.js.map