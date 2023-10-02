import { CommonErrorInstance } from "./common.error";

export class UnauthorizedErrorException extends CommonErrorInstance{
    constructor(description: string){
        super("UnauthorizedErrorException", description, 401);
    }
}