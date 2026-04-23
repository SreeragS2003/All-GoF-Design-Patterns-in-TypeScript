// ILevel.ts
//Basic blueprint for a level in a game. It has a name, difficulty, and a start method.
export interface ILevel {
    name: string;
    difficulty: string;
    start(): void;
}