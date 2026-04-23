// EasyLevel.ts
import type { ILevel } from './ilevel.js';

export class EasyLevel implements ILevel {
    name = "Sunny Meadows";
    difficulty = "Easy";
    start() {
        console.log(`Starting ${this.name} (${this.difficulty}): Only 5 enemies spawning.`);
    }
}

// HardLevel.ts
export class HardLevel implements ILevel {
    name = "Death Valley";
    difficulty = "Hard";
    start() {
        console.log(`Starting ${this.name} (${this.difficulty}): 50 enemies and limited health!`);
    }
}