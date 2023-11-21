import MessageOutputPort from "../../../../app/ports/out/messageOutput.port";
import { logDebug, logError } from "../../../../common/utils/logger.util";
import UnknownServerException from "../../../../core/exceptions/unknownServer.exception";
import Message from "../../../../domain/entities/message.entity";
import MessageMongoModel from "./models/messageMongo.model";

export default class MessageMongoAdapter implements MessageOutputPort {
    private readonly _dataSourceModel = MessageMongoModel
    async save(message: Message): Promise<Message> {
        try {
            logDebug('Saving message record: {}', message.toString())
            const { content, sender, expecter, sentDate } = message
            const messageBuilder = new this._dataSourceModel({
                content,
                sender, 
                expecter,
                sent_date: sentDate
            })
            const result = await messageBuilder.save()
            logDebug('Saving record message execution result: {}', result)
            return message
        } catch (error: any) {
            logError('Error saving message: {}', error)
            throw new UnknownServerException(error?.message)
        }
    }
    
}