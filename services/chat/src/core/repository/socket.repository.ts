export default interface ISocketRepository{
    connect(): void;
    addEvent(eventName: string, supplier: Function): void;
}