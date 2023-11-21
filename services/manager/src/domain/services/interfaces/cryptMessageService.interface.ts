import Message from "../../entities/message.entity";

export interface ICryptMessageService {
    encrypt(message: Message): Message
    decrypt(message: Message): Message
}