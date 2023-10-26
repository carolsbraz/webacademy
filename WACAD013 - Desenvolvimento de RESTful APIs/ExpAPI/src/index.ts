import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { validateEnv } from './utils/validateEnv';
import router from './router/index';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(morgan('combined'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
