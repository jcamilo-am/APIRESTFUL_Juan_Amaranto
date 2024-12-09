"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const userRoleController_1 = require("../controllers/userRoleController");
const router = express_1.default.Router();
router.post("/", authMiddleware_1.authenticate, userRoleController_1.createUserRoleController);
router.get("/", authMiddleware_1.authenticate, userRoleController_1.getAllUserRolesController);
router.get("/:id", authMiddleware_1.authenticate, userRoleController_1.getUserRoleByIdController);
router.put("/:id", authMiddleware_1.authenticate, userRoleController_1.updateUserRoleController);
router.delete("/:id", authMiddleware_1.authenticate, userRoleController_1.deleteUserRoleController);
router.put("/:id/roles", authMiddleware_1.authenticate, userRoleController_1.updateRolesForUserController);
router.get("/:id/roles", authMiddleware_1.authenticate, userRoleController_1.getRolesForUserController);
router.get("/:id/roles/count", authMiddleware_1.authenticate, userRoleController_1.countRolesForUserController);
exports.default = router;
//# sourceMappingURL=userRoleRoutes.js.map