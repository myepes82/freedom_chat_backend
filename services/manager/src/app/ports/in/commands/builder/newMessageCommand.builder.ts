import NewMessageCommand from "../newMessageCommand";

export default class NewMessageCommandBuilder {
    private content?: string;
    private sender?: string;
    private expecter?: string;
    private sentDate?: Date;

    constructor(content?: string, sender?: string, expecter?: string, sentDate?: Date) {
        this.content = content;
        this.sender = sender;
        this.expecter = expecter;
        this.sentDate = sentDate;
    }

    public setContent(content: string): this {
        this.content = content;
        return this;
    }

    public setSender(sender: string): this {
        this.sender = sender;
        return this;
    }

    public setExpecter(expecter: string): this {
        this.expecter = expecter;
        return this;
    }

    public setSentDate(sentDate: Date): this {
        this.sentDate = sentDate;
        return this;
    }

    public build(): NewMessageCommand {
        if(this.content === undefined) throw new Error("Message content could not be empty");
        if(this.sender === undefined) throw new Error("Message sender could be empty")
        if(this.expecter === undefined) throw new Error("Message expecter could be empty")
        if(this.sentDate === undefined) throw new Error("Message sentDate could be empty")
        return new NewMessageCommand(this.content, this.sender, this.expecter, this.sentDate)
    }
}
