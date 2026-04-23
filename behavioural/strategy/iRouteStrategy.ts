//This interface defines the method that every algorithm must implement (the problem algorithm needs to solve)
export interface IRouteStrategy {
    buildRoute(a: string, b: string): void;
}