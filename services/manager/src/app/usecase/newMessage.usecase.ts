import { logDebug } from "../../common/utils/logger.util";
import Message from "../../domain/entities/message.entity";
import NewMessageCommand from "../ports/in/commands/newMessageCommand";
import NewMessageInputPort from "../ports/in/newMessageInput.port";

export default class NewMessageUseCase implements NewMessageInputPort {
    async execute(data: NewMessageCommand): Promise<void> {
        const message: Message = data.toDomain();
        logDebug('Saving new message: {}', message.toString())
    }
    
}