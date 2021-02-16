import { app } from "../start/app";
import { errorHandler } from "../app/middleware/error.middleware";

export default () => app.use(errorHandler);
