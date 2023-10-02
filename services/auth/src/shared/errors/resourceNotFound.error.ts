import { CommonErrorInstance } from "./common.error";

export class ResourceNotFoundError extends CommonErrorInstance {
    constructor(description: string) {
        super("ResourceNotFoundError ", description, 404)
    }
}