//The "contract" every subscriber must follow to receive updates from the publisher. This interface defines the method that the publisher will call to notify subscribers of changes. By implementing this interface, different types of subscribers can be created, and the publisher can interact with them in a consistent way without needing to know their specific implementations.
export interface IObserver {
    update(data: string): void;
}