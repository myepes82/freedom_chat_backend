import { Request, Response } from "express";

export default function originAccessHeaderMiddleware(req: Request, res: Response): void {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
}