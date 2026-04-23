import type { IVisitor } from "./ivisitor.js";

export interface IDepartment {
    // This is the key: The element "accepts" a visitor
    accept(visitor: IVisitor): void;
}