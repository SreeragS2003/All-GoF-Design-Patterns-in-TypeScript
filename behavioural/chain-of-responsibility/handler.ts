export abstract class Handler { //The Handler interface declares a method for building the chain of handlers. It also declares a method for executing a request.
    private nextHandler?: Handler; //It just knows that it has to call handle() on the next one if it can't process the request itself.

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler; // Return the handler to allow "chaining"
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}