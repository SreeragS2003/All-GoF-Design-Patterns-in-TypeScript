import { HistoryCaretaker } from "./caretaker.js";
import { TextEditor } from "./texteditor.js";

const editor = new TextEditor();
const history = new HistoryCaretaker();

editor.type("Hello ");
history.push(editor.save()); // Save Point 1 - The memento object editor returns has to be stored somewhere, and that’s the caretaker’s job. It keeps track of all the mementos, but it never looks inside them or manipulates their data. It’s just a storage box.

editor.type("World!");
console.log(editor.getContent()); // "Hello World!"

// Oops, made a mistake! Let's undo.
const previousState = history.pop();
if (previousState) {
    editor.restore(previousState);
}

console.log(editor.getContent()); // "Hello "