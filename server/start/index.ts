import { loadEnv } from './environment';

import Server from './server'
import { errorLogger } from "../middleware/expressWinston";
import bootMiddlewares from './middleware'

loadEnv();
bootMiddlewares();

const server = new Server();

errorLogger();

server.init()