import { ChatWindow, UserProfile } from "./components.js";
import { ChatRoom } from "./concreteMediator.js";

const mediator = new ChatRoom();

const profile = new UserProfile(mediator);
const chat = new ChatWindow(mediator);

profile.login(); 
// Output: User: Logging in... 
//         Mediator: User logged in. Updating user list...

chat.send("Hello world!");
//ChatWindow: Sending "Hello world!"
//Mediator: Message received. Routing to all connected peers.