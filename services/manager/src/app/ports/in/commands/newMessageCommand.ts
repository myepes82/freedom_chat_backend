import Message from "../../../../domain/entities/message.entity";

export default class NewMessageCommand {
    private content: string;
    private expecter: string;
    private sender: string;
    private sentDate: Date;

    constructor(content: string, expecter: string, sender: string, sentDate: Date) {
        this.content = content
        this.expecter = expecter
        this.sender = sender
        this.sentDate = sentDate
    }

    public toDomain(): Message {
        return new Message(this.content, this.expecter, this.sender, this.sentDate)
    }
}