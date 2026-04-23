import type { ICommand } from "./icommand.js";

//The invoker triggers the command. It doesn't know what the command does; it just calls execute().
export class RemoteControl {
    private history: ICommand[] = [];

    public submit(command: ICommand) {
        command.execute();
        this.history.push(command);
    }

    public undoLast() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}