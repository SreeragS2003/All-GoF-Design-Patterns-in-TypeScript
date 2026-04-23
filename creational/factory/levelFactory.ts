import type { ILevel } from './ilevel.js';
import { EasyLevel, HardLevel } from './levels.js';

export default class LevelFactory {
    static createLevel(score: number): ILevel {
        if (score < 100) {
            return new EasyLevel();
        } else {
            return new HardLevel();
        }
    }
}