//Singleton Use Case: A Game with a Leaderboard

import Game1 from "./game1.js";
import Game2 from "./game2.js";

// Despite all games instantiating a leaderboard, they all point
// to the same memory object since the leaderboard is a singleton.

const game1 = new Game1();
game1.addWinner(1, 'Alice');
game1.addWinner(2, 'Bob');

const game2 = new Game2();
game2.addWinner(1, 'Charlie');
game2.addWinner(2, 'Dave');

game1.leaderboard.print(); // The leaderboard will show Charlie and Dave as the winners, not Alice and Bob, because game1 and game2 are using the same instance of the leaderboard.
game2.leaderboard.print(); //Same

