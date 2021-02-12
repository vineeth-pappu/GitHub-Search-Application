import Server from './server'
import { errorLogger } from "../middleware/expressWinston";
import bootMiddlewares from './middleware'

bootMiddlewares();

const server = new Server();

errorLogger();

server.init()