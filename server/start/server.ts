import { app } from "./app";
import * as http from 'http';
import debug from 'debug';
import Router from './router'
import { CommonRoutesConfig } from "../app/common/common.routes.config";

const debugLog: debug.IDebugger = debug('app');

export default class Server {

    server: http.Server = http.createServer(app);
    port: Number = 3000;

    router = new Router();

    constructor() {

    }

    init() {
        this.start()
    }

    private start() {
        this.server.listen(this.port, () => {
            debugLog(`Server running at http://localhost:${this.port}`);

            this.router.routes.forEach((route: CommonRoutesConfig) => {
                debugLog(`Routes configured for ${route.getName()}`);
            });
        });
    }
}