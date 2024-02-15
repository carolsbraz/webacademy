import express from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import sass from 'node-sass-middleware';

import logger from './middlewares/logger';
import validateEnv from './utils/validateEnv';
import router from './router/router';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 1234;
const NODE_ENV = process.env.NODE_ENV;

app.engine('handlebars', engine({ helpers: require(`${__dirname}/views/helpers/helpers.ts`) }));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);

app.use(
  sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    outputStyle: 'compressed',
    prefix: '/css',
  }),
);

app.use(logger('simples'));

app.use('/img', express.static(`${__dirname}/public/img`));
app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`),
]);
app.use('/css', express.static(`${__dirname}/../public/css`));
app.use('/webfonts', express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`));

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor no ambiente ${NODE_ENV} ouvindo na porta ${PORT}`);
});
