import { Response } from "express"
import { IResponseError, IResponseSucess } from "../shared/interfaces/response.interface";
import { CommonErrorInstance } from "../shared/errors/common.error";

function extractError(error: Error | CommonErrorInstance): any {
    if (error instanceof CommonErrorInstance) {
        return {
            name: error.name,
            description: error.description,
            status: error.status
        }
    }
    return {
        name: error.message,
        description: error.message,
        status: 500
    }
}

function error(error: Error | CommonErrorInstance): IResponseError {
    const { name, status, description } = extractError(error)
    return {
        status,
        content: {},
        error: name,
        description: description

    } as IResponseError;
}

function success<T>(content: T, status: number): IResponseSucess {
    return {
        status,
        content,
    } as IResponseSucess;
}

export function parseSuccessResponse<T>(res: Response, content: T, status: number): void {
    res.send(success<T>(content, status)).status(status);
}

export function parseErrorResponse(res: Response, er: Error | CommonErrorInstance): void {
    const err = error(er);
    res.send(err).status(err.status);
}