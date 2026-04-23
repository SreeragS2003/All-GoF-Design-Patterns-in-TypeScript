import { FolderItem } from "./composite.js";
import { FileItem } from "./leaf.js";

// Create files
const file1 = new FileItem("photo.jpg", 100);
const file2 = new FileItem("resume.pdf", 50);

// Create a folder and add these files
const myFolder = new FolderItem("My Documents");
myFolder.add(file1);
myFolder.add(file2);

// Create a sub-folder
const subFolder = new FolderItem("Old Projects");
subFolder.add(new FileItem("project1.zip", 200)); //Add a file to the sub-folder

// Nest the sub-folder
myFolder.add(subFolder);

// Total size of myFolder includes the sub-folder!
console.log(`${myFolder.getName()} total size: ${myFolder.getSize()}KB`); // Output: My Documents total size: 350KB