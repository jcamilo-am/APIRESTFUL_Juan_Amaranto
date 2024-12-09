"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerUserMiddleware_1 = __importDefault(require("../middlewares/registerUserMiddleware"));
const registerUserController_1 = require("../controllers/registerUserController");
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post("/register", registerUserMiddleware_1.default, registerUserController_1.registerUserController);
router.post("/login", authController_1.loginController);
router.get("/", authMiddleware_1.authenticate, userController_1.getAllUsersController);
router.get("/:id", authMiddleware_1.authenticate, userController_1.getAUserByIdController);
router.put("/:id", authMiddleware_1.authenticate, userController_1.updateUserController);
router.delete("/:id", authMiddleware_1.authenticate, userController_1.deleteUserController);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map