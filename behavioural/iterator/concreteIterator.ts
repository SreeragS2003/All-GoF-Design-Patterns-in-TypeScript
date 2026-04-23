import type { IIterator } from "./iIterator.js";

export class ArrayIterator<T> implements IIterator<T> {
    private position: number = 0;

    constructor(private items: T[]) {}

    public next(): T | null {
        if (this.hasNext()) {
            return this.items[this.position++]?? null;
        }
        return null;
    }

    public hasNext(): boolean {
        return this.position < this.items.length;
    }
}