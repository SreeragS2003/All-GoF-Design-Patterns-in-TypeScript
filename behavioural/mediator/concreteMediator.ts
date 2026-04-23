import type { IMediator } from "./imediator.js";

export class ChatRoom implements IMediator {
    public notify(sender: object, event: string): void {
        if (event === "login") {
            console.log("Mediator: User logged in. Updating user list UI and playing sound.");
            // Logic to coordinate other components
        }
        if (event === "message") {
            console.log("Mediator: Message received. Routing to all connected peers.");
        }
    }
}