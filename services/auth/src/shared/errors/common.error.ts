import { IErrorObject } from "../interfaces/error.interface";

export class CommonErrorInstance extends Error implements IErrorObject{
    description?: string | undefined;
    status?: number | undefined;
    constructor(name: string, description: string, status: number){
        super(name)
        this.description = description;
        this.status = status;
    }
}