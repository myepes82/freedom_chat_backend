import NewMessageCommand from "./commands/newMessageCommand";

export default interface NewMessageInputPort{
    execute(data: NewMessageCommand): Promise<void>;
}