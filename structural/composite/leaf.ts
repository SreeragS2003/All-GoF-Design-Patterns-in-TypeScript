//This is a leaf item in the file system, it cannot contain other items. It implements the IFileSystemItem interface, which means it must have getName() and getSize() methods.
import type { IFileSystemItem } from "./ifileSystemItem.js";

export class FileItem implements IFileSystemItem {
    constructor(private name: string, private size: number) {}

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }
}