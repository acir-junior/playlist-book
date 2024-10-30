export default interface HttpServer {
    register(method: string, path: string, handler: Function): void;
    listen(port: number): void;
}