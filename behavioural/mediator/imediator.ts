//This defines how objects notify the mediator that "something happened."
export interface IMediator {
    notify(sender: object, event: string): void;
}