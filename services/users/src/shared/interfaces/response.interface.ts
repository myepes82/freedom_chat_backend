
interface IReponse{
    status: number;
    content?: any | any[];
}

export interface IResponseError extends IReponse{
    error: string;
    description: string;
}

export interface IResponseSucess extends IReponse{
    at?: string;
}

