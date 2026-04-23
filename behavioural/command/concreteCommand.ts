import type { ICommand } from "./icommand.js";
import type { Light } from "./receiver.js";

export class LightOnCommand implements ICommand {
    constructor(private light: Light) {}

    execute() { this.light.turnOn(); }
    undo() { this.light.turnOff(); }
}

export class LightOffCommand implements ICommand {
    constructor(private light: Light) {}

    execute() { this.light.turnOff(); }
    undo() { this.light.turnOn(); }
}