"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const roleController_1 = require("../controllers/roleController");
const router = express_1.default.Router();
router.post('/', authMiddleware_1.authenticate, roleController_1.createRoleController);
router.get('/', authMiddleware_1.authenticate, roleController_1.getAllRolesController);
router.get('/:id', authMiddleware_1.authenticate, roleController_1.getRoleByIdController);
router.put('/:id', authMiddleware_1.authenticate, roleController_1.updateRoleController);
router.delete('/:id', authMiddleware_1.authenticate, roleController_1.deleteRoleController);
router.get('/total', authMiddleware_1.authenticate, roleController_1.getTotalRolesController);
router.get('/name/:name', authMiddleware_1.authenticate, roleController_1.getRoleByNameController);
exports.default = router;
//# sourceMappingURL=roleRoutes.js.map