import { BlueColor, RedColor } from "./implementation.js";
import { Circle, Square } from "./refinedAbstraction.js";

const red = new RedColor();
const blue = new BlueColor();

const redCircle = new Circle(red);
const redSquare = new Square(red);
const blueSquare = new Square(blue);

redCircle.draw();   // Drawing a Red Circle.
redSquare.draw();   // Drawing a Red Square.
blueSquare.draw();  // Drawing a Blue Square.