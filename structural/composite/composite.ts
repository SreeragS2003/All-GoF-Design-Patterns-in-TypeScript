import type { IFileSystemItem } from "./ifileSystemItem.js";

export class FolderItem implements IFileSystemItem {
    private children: IFileSystemItem[] = []; //This array will hold the child items of the folder, which can be either FileItem or other FolderItem instances.

    constructor(private name: string) {}

    add(item: IFileSystemItem): void {
        this.children.push(item); //Add a child item to the folder (can be either a FileItem or another FolderItem)
    }

    getName(): string { return this.name; } //Return the name of the folder

    // This is the key: The folder calculates its size 
    // by asking all its children for THEIR sizes.
    getSize(): number {
        return this.children.reduce((total, item) => total + item.getSize(), 0);
    }
}