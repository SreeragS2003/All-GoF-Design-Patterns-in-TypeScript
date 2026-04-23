import type { IRouteStrategy } from "./iRouteStrategy.js";

export class DrivingStrategy implements IRouteStrategy {
    buildRoute(a: string, b: string) {
        console.log(`Calculating road directions from ${a} to ${b} (Avoids toll roads).`);
    }
}

export class WalkingStrategy implements IRouteStrategy {
    buildRoute(a: string, b: string) {
        console.log(`Calculating sidewalk route from ${a} to ${b} (Avoids steep hills).`);
    }
}