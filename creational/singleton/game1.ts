import Leaderboard from "./leaderboard.js";
import type IGame from "./igame.js";

export default class Game1 implements IGame {
    leaderboard: Leaderboard;

    constructor(){
        this.leaderboard = Leaderboard.getInstance();
    }

    addWinner(position: number, name: string): void {
        this.leaderboard.addWinner(position, name);
    }
}