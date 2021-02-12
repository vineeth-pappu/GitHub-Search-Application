import { app } from "../start/app";
import * as bodyparser from 'body-parser';

// here we are adding middleware to parse all incoming requests as JSON 
export default () => app.use(bodyparser.json());
