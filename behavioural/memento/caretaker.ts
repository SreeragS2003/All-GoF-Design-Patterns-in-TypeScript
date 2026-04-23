import type { EditorMemento } from "./memento.js";

//This object keeps track of the mementos but never touches the data inside them. It’s just a storage box.
export class HistoryCaretaker {
    private mementos: EditorMemento[] = [];

    public push(memento: EditorMemento): void {
        this.mementos.push(memento);
    }

    public pop(): EditorMemento | undefined {
        return this.mementos.pop();
    }
}