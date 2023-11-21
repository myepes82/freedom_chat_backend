import Message from "../entities/message.entity";

export default interface MessageRepository {
    save(message: Message): Promise<Message>
}