// use case for Abstract Factory pattern
import type { IUIFactory } from './abstract-factory.js';
import { MacOSFactory, WindowsFactory } from './concrete-factory.js';

function initializeUI(factory: IUIFactory) {
    const btn = factory.getButton(); //abstract interface method to get a button
    const menu = factory.getMenu(); //abstract interface method to get a menu

    menu.display();
    btn.render();
}

// In a real app, this logic would run at startup
const os = "MacOS"; 
let currentFactory: IUIFactory;

if (os === "Windows") {
    currentFactory = new WindowsFactory();
} else {
    currentFactory = new MacOSFactory();
}

//Initializes the UI with the appropriate factory based on the OS
initializeUI(currentFactory);