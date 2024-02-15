import { Request, Response } from "express";

function change(req: Request, res: Response){
    const lang = req.body.lang;
    res.cookie('lang', lang);
    return res.status(200).json({lang});
}

export default { change }