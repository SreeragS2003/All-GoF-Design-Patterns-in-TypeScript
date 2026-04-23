//high-level - the shape
import type { IColor } from "./implementation.js";

//Shape holds a reference to the implementation (IColor) and delegates the work to it. 
//This reference is the 'bridge' that allows the abstraction (Shape) and the implementation (IColor) to vary independently.
export abstract class Shape {
    // This is the Bridge to the Implementation
    protected color: IColor;

    constructor(color: IColor) {
        this.color = color; //We get color from the constructor params , eg: - new Circle(new RedColor()) or new Square(new BlueColor())
    }

    abstract draw(): void;
}