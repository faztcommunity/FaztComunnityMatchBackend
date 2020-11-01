import { Request, Response } from 'express';


export function indexWelcome(req: Request, res: Response) {
    return res.status(200).json({ welcome: "Welcome To My Api" });
};
