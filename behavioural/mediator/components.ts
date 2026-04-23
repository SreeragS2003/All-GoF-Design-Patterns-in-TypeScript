import type { IMediator } from "./imediator.js";

class Component {
    constructor(protected mediator: IMediator) {}
}
//These objects don't communicate directly with each other. Instead, they send messages to the mediator, which then coordinates the interactions between them. This decouples the components and centralizes the communication logic in the mediator.
export class UserProfile extends Component {
    public login() {
        console.log("User: Logging in...");
        this.mediator.notify(this, "login");
    }
}

export class ChatWindow extends Component {
    public send(msg: string) {
        console.log(`ChatWindow: Sending "${msg}"`);
        this.mediator.notify(this, "message");
    }
}