"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personController_1 = require("../controllers/personController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.post('/', authMiddleware_1.authenticate, personController_1.createPersonController);
router.get('/', authMiddleware_1.authenticate, personController_1.getAllPeopleController);
router.get('/:id', authMiddleware_1.authenticate, personController_1.getPersonByIdController);
router.put('/:id', authMiddleware_1.authenticate, personController_1.updatePersonController);
router.delete('/:id', authMiddleware_1.authenticate, personController_1.deletePersonController);
exports.default = router;
//# sourceMappingURL=personRoutes.js.map