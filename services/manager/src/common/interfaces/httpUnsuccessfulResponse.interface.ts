import IHttpResponseInterface from "./httpResponse.interface";

export default interface IHttpUnsuccessfulResponse extends IHttpResponseInterface {
    error_type: string;
    exception: string;
    message: string;
    at?: string;
}