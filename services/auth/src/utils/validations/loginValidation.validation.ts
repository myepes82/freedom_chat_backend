import { ErrorConstants } from "../../shared/constants/errorConstants.constants";
import { BadRequestErrorException } from "../../shared/errors/badRequestException.error";
import { UnauthorizedErrorException } from "../../shared/errors/unauthorizedException.error";

export default function validate(data: any){
    const {password, user, email} = data;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(!password) throw new BadRequestErrorException(ErrorConstants.LOGIN.PASSWORD.REQUIRED);
    if(!passwordRegex.test(password)) throw new UnauthorizedErrorException(ErrorConstants.LOGIN.PASSWORD.MATCH);
    
    if(!user && !email) throw new BadRequestErrorException(ErrorConstants.LOGIN.GENERAL.IDENTIFIER_NOT_PROVIDED);
    if(user && typeof user === "string"){
        if(user.length > 12)throw new BadRequestErrorException(ErrorConstants.LOGIN.USER.MAX_LENGTH);
        if(user.length < 6) throw new BadRequestErrorException(ErrorConstants.LOGIN.USER.MIN_LENGTH);
    } 

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email && typeof email === "string" && emailRegex.test(email)) throw new BadRequestErrorException(ErrorConstants.LOGIN.EMAIL.VALID);

}