import { CommonErrorInstance } from "./common.error";

export class ResourceServerError extends CommonErrorInstance {
    constructor(description: string) {
        super("ResourceServerError", description, 500)
    }
}