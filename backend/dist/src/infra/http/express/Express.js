"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Express {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
    }
    register(method, path, handler) {
        this.app[method](path, async function (req, res) {
            const result = await handler(req.params, req.body);
            res.status(result.status).json(result.body);
        });
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}
exports.default = Express;
