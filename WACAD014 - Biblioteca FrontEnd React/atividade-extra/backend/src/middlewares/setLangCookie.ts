import { Request, Response, NextFunction } from "express";

import { DEFAULT_LANGUAGE } from "../resources/linguagem/linguagem.constants";

function setLangCookie(req: Request, res: Response, next: NextFunction) {
  if (!("lang" in req.cookies)) res.cookie("lang", DEFAULT_LANGUAGE);
  next();
}

export default setLangCookie;
