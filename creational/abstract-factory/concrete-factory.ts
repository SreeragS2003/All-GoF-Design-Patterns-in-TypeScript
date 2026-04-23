import type { IUIFactory } from "./abstract-factory.js";
import { MacOSButton, MacOSMenu, WindowsButton, WindowsMenu } from "./concreteProducts.js";

export class WindowsFactory implements IUIFactory {
    getButton() { return new WindowsButton(); }
    getMenu() { return new WindowsMenu(); }
}

export class MacOSFactory implements IUIFactory {
    getButton() { return new MacOSButton(); }
    getMenu() { return new MacOSMenu(); }
}