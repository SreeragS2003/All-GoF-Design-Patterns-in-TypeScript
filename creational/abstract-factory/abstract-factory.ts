// IUIFactory.ts

//This guarantees that any factory you build must be able to provide both a button and a menu.
import type { IButton, IMenu } from './products.js';

export interface IUIFactory {
    getButton(): IButton;
    getMenu(): IMenu;
}