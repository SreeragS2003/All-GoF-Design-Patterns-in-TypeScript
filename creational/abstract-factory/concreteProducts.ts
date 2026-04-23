import type { IButton, IMenu } from "./products.js";

//Concrete products based on version

//Button for Windows
export class WindowsButton implements IButton{
    render(): void {
        console.log("Rendering a Windows button.");
    }
}

//Button for MacOS
export class MacOSButton implements IButton{
    render(): void {
        console.log("Rendering a MacOS button.");
    }
}

//Menu for Windows
export class WindowsMenu implements IMenu{
    display(): void {
        console.log("Displaying a Windows menu.");
    }
}

//Menu for MacOS
export class MacOSMenu implements IMenu{
    display(): void {
        console.log("Displaying a MacOS menu.");
    }
}