import { Request, Response } from "express";

export class FirstController {
  public home(req: Request, res: Response) {
    return res.send('<h1>Nois que manda</h1>')
  }
}
