// use-case.ts
import LevelFactory from './levelFactory.js';

const userScore = 150;

// The Factory decides which level the player gets based on their score
const currentLevel = LevelFactory.createLevel(userScore);

currentLevel.start(); 
// Output: Starting Death Valley (Hard): 50 enemies and limited health!