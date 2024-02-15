import { Request, Response } from "express";

function change(req: Request, res: Response) {
  const lang = req.body.lang;
  res.cookie("lang", lang);
  res.status(200).json({ lang });
}

function getLinguagem(req: Request, res: Response) {
  const lang = req.cookies["lang"];
  res.status(200).json({ lang });
}

export default { change, getLinguagem };
