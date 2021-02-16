import { loadEnv } from './environment';

import Server from './server'
import { errorLogger } from "../middleware/expressWinston";
import bootMiddlewares from './middleware'
import exceptionHandler from '../middleware/exceptionHandler';

loadEnv();
bootMiddlewares();

const server = new Server();

server.errorLogger(errorLogger);
server.exceptionHandler(exceptionHandler);

server.init();
