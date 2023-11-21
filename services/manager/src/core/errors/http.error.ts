import ErrorTypeConstants from "../../common/constants/errorTypes.constants";

export default abstract class HttpError extends Error {
    public readonly type = ErrorTypeConstants.HTTP_ERROR_EXCEPTION.label
    public readonly status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    };
};