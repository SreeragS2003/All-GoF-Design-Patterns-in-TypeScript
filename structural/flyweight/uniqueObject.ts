import type { TreeType } from "./flyweight.js";

export class Tree {
    constructor(
        private x: number, 
        private y: number, 
        private type: TreeType // The shared Flyweight
    ) {}

    public draw(): void {
        this.type.render(this.x, this.y); //The coordinates are unique to each tree, but the type (name, color, texture) is shared. The draw method uses the shared type to render the tree at its specific location.
    }
}