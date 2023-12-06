import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import database from './database';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

database.sequelize.sync().then(() => {
  console.log(`⚡️[server]: Database is running at ${process.env.DB_HOST}`);
});