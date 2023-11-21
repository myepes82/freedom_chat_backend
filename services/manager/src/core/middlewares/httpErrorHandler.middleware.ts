import { NextFunction, Request, Response } from "express";
import HttpError from "../errors/http.error";
import IHttpUnsuccessfulResponse from "../../common/interfaces/httpUnsuccessfulResponse.interface";
import ErrorTypeConstants from "../../common/constants/errorTypes.constants";
import HttpStatusEnum from "../../common/enums/httpStatus.enum";
import ServerError from "../errors/server.error";

export default function httpErrorHandlerMiddleware(err: HttpError | ServerError , req: Request, res: Response, _: NextFunction): void {
    const isCustomError: boolean = err instanceof HttpError || err instanceof ServerError
    const statusCode: number = err instanceof HttpError ? err.status : HttpStatusEnum.INTERNAL_SERVER_ERROR
    const response: IHttpUnsuccessfulResponse = {
        success: false,
        error_type: isCustomError ? err.type  : ErrorTypeConstants.UNKNOWN_ERROR.label,
        exception: err.name,
        message: err.message,
        at: req.path
    }
    res.status(statusCode).send(response)
}