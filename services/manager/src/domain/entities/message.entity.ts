export default class Message {
    private readonly _content: string;
    private readonly _sender: string;
    private readonly _expecter: string;
    private readonly _sentDate: Date;
  
    constructor(content: string, sender: string, expecter: string, sentDate: Date) {
      this._content = content;
      this._sender = sender;
      this._expecter = expecter;
      this._sentDate = sentDate;
    }
  
    get content(): string {
      return this._content;
    }
  
    get sender(): string {
      return this._sender;
    }
  
    get expecter(): string {
      return this._expecter;
    }
  
    get sentDate(): Date {
      return this._sentDate;
    }
  
    public withContent(content: string): Message {
      return new Message(content, this._sender, this._expecter, this._sentDate)
    }
    toString(): string {
      return JSON.stringify(this);
    }
  }
  