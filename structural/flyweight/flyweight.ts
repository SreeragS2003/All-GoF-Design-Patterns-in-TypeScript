//Flyweight - heavy data that many objects can share to save memory. 
export class TreeType {
    constructor(
        public name: string, 
        public color: string, 
        public texture: string // Imagine this is a massive 4K image string
    ) {}

    render(x: number, y: number): void {
        console.log(`Rendering ${this.name} (${this.color}) at [${x}, ${y}]`);
    }
}