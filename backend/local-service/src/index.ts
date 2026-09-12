import express from 'express';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';

dotenv.config();
const app = express();
app.use(express.json());
registerRoutes(app);
app.listen(Number(process.env.PORT || 4001));
