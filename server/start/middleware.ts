import bodyParser from '../middleware/bodyparser'
import cors from '../middleware/cors'
import { logger } from "../middleware/expressWinston";


export default () => {
    bodyParser();
    cors();
    logger();
}