import { app } from "./app";
import * as http from 'http';
import debug from 'debug';
import Router from './router'
import { CommonRoutesConfig } from "../app/common/common.routes.config";

const debugLog: debug.IDebugger = debug('app');

export default class Server {

    server: http.Server = http.createServer(app);
    port: Number = Number(process.env.PORT || 4001);
    host: string = (process.env.HOST || 'http://localhost')

    router = new Router();

    constructor() {

    }

    init() {
        this.start()
    }

    errorLogger(logger: Function) {
        logger()
    }

    exceptionHandler(handler: Function) {
        handler()
    }

    private start() {
        this.server.listen(this.port, () => {
            debugLog(`Server running at ${this.host}:${this.port}`);
        });
    }
}