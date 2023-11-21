import { Request, Response, NextFunction } from "express";
import { LogDebug } from "../logger.util";
export default function requestLoggerMiddleware(req: Request, _: Response, next: NextFunction){
    const at = "Servet.ts"
    const {
        method,
        body,
        path
    } = req;
    if(method.toUpperCase() !== "GET"){
        LogDebug(`Receiving ${method.toUpperCase()} to ${path} - with body: \n ${body} `, at)
    }else{
        LogDebug(`Receiving ${method.toUpperCase()} to ${path}`, at)
    }
    next()
}