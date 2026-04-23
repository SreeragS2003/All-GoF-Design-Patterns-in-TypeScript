export abstract class BeverageMaker {
    // This is the Template Method. It defines the algorithm's structure.
    // It is usually marked as 'final' in other languages to prevent overriding.
    public makeBeverage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    // Common step: everyone boils water the same way.
    private boilWater(): void {
        console.log("Boiling water...");
    }

    // Common step: everyone pours it in a cup.
    private pourInCup(): void {
        console.log("Pouring into cup...");
    }

    // Steps to be implemented by subclasses
    protected abstract brew(): void;
    protected abstract addCondiments(): void;
}