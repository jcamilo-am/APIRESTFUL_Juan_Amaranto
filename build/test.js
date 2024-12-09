"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const passwordFromUser = "strongpassword123";
const hashFromDatabase = "$2b$10$i2dcBYF.Nm9jlI3lCDzOV.0TmkmP/mdOW3HDPrKvWs5auQzQfots.";
bcrypt_1.default.compare(passwordFromUser, hashFromDatabase)
    .then((result) => {
    if (result) {
        console.log('¡Las contraseñas coinciden!');
    }
    else {
        console.log('Las contraseñas NO coinciden.');
    }
})
    .catch((error) => {
    console.error('Error comparando las contraseñas:', error);
});
//# sourceMappingURL=test.js.map