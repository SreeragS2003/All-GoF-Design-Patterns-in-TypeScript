import type { IIterator } from "./iIterator.js";

export interface ICollection<T> {
    createIterator(): IIterator<T>;
}