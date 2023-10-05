import express from 'express';
import logger from './middlewares/logger';
import dotenv from 'dotenv';
import validateEnv from './utils/validateEnv';
import router from './router/router';
import { engine } from 'express-handlebars';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 1234;
const NODE_ENV = process.env.NODE_ENV;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(logger('simples'));

app.use('/img', express.static(`${__dirname}/../public/img`));
app.use('/js', express.static(`${__dirname}/../public/js`));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor no ambiente ${NODE_ENV} ouvindo na porta ${PORT}`);
});
