import { Request, Response } from "express"
import ILoggedUser from "../../shared/interfaces/loggedUser.interface";
import { LogError } from "../../utils/logger.util";
import { parseErrorResponse } from "../../utils/responseParser.utils";
import validateLogin from "../../utils/validations/loginValidation.validation";
import ILoginUser from "../../shared/interfaces/login.interface";

export default async function login(req: Request, res: Response): ILoggedUser {
    try {
        validateLogin(req.body);
        const loginObject: ILoginUser = req.body;
        
    } catch (error: any) {
        LogError(error, "LoginService.ts")
        parseErrorResponse(res, error);
    }
}