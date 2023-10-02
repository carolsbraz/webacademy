import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 1234;
const NODE_ENV = process.env.NODE_ENV;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.get('/about', (req: Request, res: Response) => {
  res.send('Sobre a aplicação');
});

app.listen(PORT, () => {
  console.log(`Servidor no ambiente ${NODE_ENV} ouvindo na porta ${PORT}`);
});
