import type { IRouteStrategy } from "./iRouteStrategy.js";

export class Navigator {
    private strategy: IRouteStrategy;

    // We inject the strategy here
    constructor(strategy: IRouteStrategy) {
        this.strategy = strategy;
    }

    // We can even swap it at runtime!
    public setStrategy(strategy: IRouteStrategy) {
        this.strategy = strategy;
    }

    public buildRoute(a: string, b: string) {
        this.strategy.buildRoute(a, b);
    }
}