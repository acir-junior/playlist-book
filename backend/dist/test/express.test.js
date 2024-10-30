"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express_1 = __importDefault(require("@infra/http/express/Express"));
test('test', async () => {
    const HttpServer = new Express_1.default();
    HttpServer.register('get', '/test', async () => {
        return {
            status: 200,
            body: { message: 'Hello, world!' }
        };
    });
});
