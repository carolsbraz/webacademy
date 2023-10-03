import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

import dotenv from 'dotenv';
dotenv.config();

const LOGS = process.env.LOGS;

function logger(tipo: 'simples' | 'completo') {
  if (tipo === 'simples') {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = `${new Date().toISOString()} ${req.url} ${req.method}\n`;
      fs.appendFile(`${LOGS}`, data, (err) => {
        if (err) {
          console.error(err);
        }
      });
      next();
    };
  } else {
    return (req: Request, res: Response, next: NextFunction) => {
      const data = `${new Date().toISOString()} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}\n`;
      fs.appendFile(`${LOGS}`, data, (err) => {
        if (err) {
          console.error(err);
        }
      });
      next();
    };
  }
}

export default logger;
