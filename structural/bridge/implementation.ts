//details - the specific color

export interface IColor {
    applyColor(): string;
}

export class RedColor implements IColor {
    applyColor() { return "Red"; } //Overriding the applyColor method to return "Red"
}

export class BlueColor implements IColor {
    applyColor() { return "Blue"; } //Overriding the applyColor method to return "Blue"
}