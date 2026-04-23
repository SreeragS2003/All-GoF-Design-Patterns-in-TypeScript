//The guy who does the actual work in the Command pattern. The receiver is the component that performs the actual action when a command is executed. It contains the business logic that defines how to carry out the request. In this example, the Light class is the receiver that has methods to turn the light on and off. When a command is executed, it will call these methods to perform the desired action.
export class Light {
    public turnOn() { console.log("The light is ON"); }
    public turnOff() { console.log("The light is OFF"); }
}