import { EditorMemento } from "./memento.js";

export class TextEditor {
    private content: string = ""; //Initial text content is empty

    public type(text: string): void {
        this.content += text; //When user types, we append the new text to the existing content. This simulates the user typing in the editor.
    }

    public getContent(): string {
        return this.content; //To see the content typed in the editor
    }

    // Creates the "Save File"
    public save(): EditorMemento {
        return new EditorMemento(this.content); //Editor creates and returns a memento object that captures the current state of the content. This allows us to save the state at this point in time.
    }

    // Loads the "Save File"
    public restore(memento: EditorMemento): void {
        this.content = memento.getContent(); //Editor takes a memento object and restores its content to the state stored in that memento. This allows us to revert back to a previous state.
    }
}