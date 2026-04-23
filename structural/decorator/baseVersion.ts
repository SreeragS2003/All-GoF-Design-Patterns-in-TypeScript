import type { IPizza } from "./ipizza.js";

export class PlainPizza implements IPizza {
    getDescription(): string {
        return "Plain Pizza";
    }
    getCost(): number {
        return 5;
    }
}