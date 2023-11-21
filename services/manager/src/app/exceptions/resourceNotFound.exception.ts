import HttpStatusEnum from "../../common/enums/httpStatus.enum";
import HttpError from "../../core/errors/http.error";

export default class ResourceNotFoundException extends HttpError {
    constructor(message: string) {
        super(message, HttpStatusEnum.RESOURCE_NOT_FOUND)
    }
}