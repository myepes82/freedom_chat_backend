import { CommonErrorInstance } from "./common.error";

export class ResourceNotFoundErrorException extends CommonErrorInstance {
    constructor(description: string) {
        super("ResourceNotFoundError ", description, 404)
    }
}