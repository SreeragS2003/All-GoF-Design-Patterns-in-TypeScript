//A simple, immutable object that holds the state. It shouldn't have any logic
export class EditorMemento {
    constructor(private readonly content: string) {}
    
    // Only the Originator (also called the Editor) should really use this
    getContent(): string {
        return this.content;
    }
}