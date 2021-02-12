import { app } from "../start/app";
import cors from 'cors';

// here we are adding middleware to allow cross-origin requests
export default () => app.use(cors());
