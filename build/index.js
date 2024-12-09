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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.InvoiceDetails = exports.Invoice = exports.UserRole = exports.Role = exports.Person = exports.User = void 0;
const server_1 = require("./server");
const db_1 = __importDefault(require("./config/db"));
const user_1 = __importDefault(require("./models/user"));
const person_1 = __importDefault(require("./models/person"));
const role_1 = __importDefault(require("./models/role"));
const userRole_1 = __importDefault(require("./models/userRole"));
const invoice_1 = __importDefault(require("./models/invoice"));
const invoiceDetail_1 = __importDefault(require("./models/invoiceDetail"));
const product_1 = __importDefault(require("./models/product"));
const User = (0, user_1.default)(db_1.default);
exports.User = User;
const Role = (0, role_1.default)(db_1.default);
exports.Role = Role;
const UserRole = (0, userRole_1.default)(db_1.default);
exports.UserRole = UserRole;
const Person = (0, person_1.default)(db_1.default);
exports.Person = Person;
const Invoice = (0, invoice_1.default)(db_1.default);
exports.Invoice = Invoice;
const InvoiceDetails = (0, invoiceDetail_1.default)(db_1.default);
exports.InvoiceDetails = InvoiceDetails;
const Product = (0, product_1.default)(db_1.default);
exports.Product = Product;
(_a = User.associate) === null || _a === void 0 ? void 0 : _a.call(User, { Person, Role });
(_b = Role.associate) === null || _b === void 0 ? void 0 : _b.call(Role, { User });
(_c = UserRole.associate) === null || _c === void 0 ? void 0 : _c.call(UserRole, { User, Role });
(_d = Person.associate) === null || _d === void 0 ? void 0 : _d.call(Person, { User });
(_e = Invoice.associate) === null || _e === void 0 ? void 0 : _e.call(Invoice, { User, InvoiceDetails });
(_f = InvoiceDetails.associate) === null || _f === void 0 ? void 0 : _f.call(InvoiceDetails, { Invoice, Product });
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.authenticate();
        console.log('Connection has been established successfully.');
        yield db_1.default.sync({ force: true });
        console.log('All models were synchronized successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
});
connectDatabase()
    .then(() => {
    server_1.server.listen(server_1.PORT, () => {
        console.log(`
        Server running on http://localhost:${server_1.PORT}
        Link: http://localhost:${server_1.PORT}         
      `);
    });
});
//# sourceMappingURL=index.js.map