"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = __importDefault(require("@infra/http/express/Express"));
async function index() {
    const httpServer = new Express_1.default();
    httpServer.listen(5000);
}
index();
