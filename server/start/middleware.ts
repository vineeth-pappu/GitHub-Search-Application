import bodyParser from '../middleware/bodyparser'
import cors from '../middleware/cors'
import { logger, errorLogger } from "../middleware/expressWinston";


export default () => {
    bodyParser();
    cors();
    // logger();
    // errorLogger();
}