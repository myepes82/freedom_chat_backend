import { CommonErrorInstance } from "./common.error";

export class ResourceServerErrorException extends CommonErrorInstance {
    constructor(description: string) {
        super("ResourceServerError", description, 500)
    }
}