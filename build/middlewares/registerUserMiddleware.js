"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRegister = (req, res, next) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
        res.status(400).json({ message: 'Email and password are required' });
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        res.status(400).json({ message: 'Invalid email format' });
        return;
    }
    if (Password.length < 6) {
        res.status(400).json({ message: 'Password must be at least 6 characters long' });
        return;
    }
    next();
};
exports.default = validateRegister;
//# sourceMappingURL=registerUserMiddleware.js.map