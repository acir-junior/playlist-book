import HttpServer from "../HttpServer";
import express, { Application, Request, Response } from "express";

type Method = 'get' | 'post' | 'put' | 'delete';

export default class Express implements HttpServer {
    private app: Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    register(method: Method, path: string, handler: Function): void {
        this.app[method](path, async function(req: Request, res: Response) {
            const result = await handler(req.params, req.body);
            res.status(result.status).json(result.body);
        });
    }

    listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}