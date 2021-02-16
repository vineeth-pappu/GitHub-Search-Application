import { app } from "../start/app";
import * as winston from 'winston';
import * as expressWinston from 'express-winston';

// here we are configuring the expressWinston logging middleware,
// which will automatically log all HTTP requests handled by Express.js
export const logger = () => app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));



// here we are configuring the expressWinston error-logging middleware,
// which doesn't *handle* errors per se, but does *log* them
export const errorLogger = () => app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));
