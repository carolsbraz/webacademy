import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.send('hello world!!');
};

export default { index };
