// refined abstraction - the specific shape (Circle, Square)

import { Shape } from "./abstraction.js";

export class Circle extends Shape {
    draw(): void {
        console.log(`Drawing a ${this.color.applyColor()} Circle.`);
    }
}

export class Square extends Shape {
    draw(): void {
        console.log(`Drawing a ${this.color.applyColor()} Square.`);
    }
}