import { CommonErrorInstance } from "./common.error";

export class BadRequestErrorException extends CommonErrorInstance{
    constructor(description: string){
        super("BadRequestErrorException", description, 400);
    }
}