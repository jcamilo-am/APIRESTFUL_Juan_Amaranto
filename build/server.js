"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const personRoutes_1 = __importDefault(require("./routes/personRoutes"));
const roleRoutes_1 = __importDefault(require("./routes/roleRoutes"));
const userRoleRoutes_1 = __importDefault(require("./routes/userRoleRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const invoiceRoutes_1 = __importDefault(require("./routes/invoiceRoutes"));
const invoiceDetailRoutes_1 = __importDefault(require("./routes/invoiceDetailRoutes"));
dotenv_1.default.config();
const server = (0, express_1.default)();
exports.server = server;
const PORT = process.env.PORT || 8080;
exports.PORT = PORT;
server.use((0, helmet_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, morgan_1.default)('dev'));
server.use('/users', userRoutes_1.default);
server.use('/person', personRoutes_1.default);
server.use('/role', roleRoutes_1.default);
server.use('/userRole', userRoleRoutes_1.default);
server.use('/product', productRoutes_1.default);
server.use('/invoice', invoiceRoutes_1.default);
server.use('/invoiceDetail', invoiceDetailRoutes_1.default);
//# sourceMappingURL=server.js.map