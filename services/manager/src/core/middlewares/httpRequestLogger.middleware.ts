import { NextFunction, Request, Response } from "express";
import { logDebug } from "../../common/utils/logger.util";

export default function httpRequestLoggerMiddleware(req: Request, _: Response, next: NextFunction): void {
    const { method, query, path , body} = req
    let message =  'Receiving {} call to {} '
    let filler
    if(method.toUpperCase() !== "GET") {
        message += `with query {}`
        filler = query
    } else {
        message += `with body {}`
        filler = body
    }
    logDebug(message, method, path, filler)
    next()
}