import { LightOffCommand, LightOnCommand } from "./concreteCommand.js";
import { Light } from "./receiver.js";
import { RemoteControl } from "./remoteControl.js";

const livingRoomLight = new Light(); // The receiver
const remote = new RemoteControl(); // The invoker

const lightOn = new LightOnCommand(livingRoomLight); //Wrapper which wraps the receiver and execute, undo methods. The client creates a command and sets its receiver.
const lightOff = new LightOffCommand(livingRoomLight);

// Use the remote
remote.submit(lightOn);  // Output: The light is ON
remote.submit(lightOff); // Output: The light is OFF

// Magic: The Undo button
remote.undoLast();       // Output: The light is ON