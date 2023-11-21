import ServerError from "../errors/server.error";

export default class UnknownServerException extends ServerError {
    private readonly _exception: string = "UnknownServerException";
    constructor(message: string){
        super(message);
        this.name = this._exception;
    };
};