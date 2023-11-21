import ErrorTypeConstants from "../../common/constants/errorTypes.constants";

export default abstract class ServerError extends Error {
    public readonly type = ErrorTypeConstants.SERVER_ERROR_EXCEPTION.label;
};