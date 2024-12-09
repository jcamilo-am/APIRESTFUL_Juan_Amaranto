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
exports.registerUserController = void 0;
const registerUserService_1 = require("../services/registerUserService");
const registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password } = req.body;
    try {
        const newUser = yield (0, registerUserService_1.registerUser)(Email, Password);
        res.status(201).json(newUser);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});
exports.registerUserController = registerUserController;
//# sourceMappingURL=registerUserController.js.map