import { Enemy } from "./clone.js";

// 1. Create the 'Master' prototype once
const prototypeZombie = new Enemy(100, "Rusty Knife", [0, 0]);

// 2. Clone it whenever you need a new one
const zombie1 = prototypeZombie.clone();
zombie1.coordinates = [10, 5]; // Move the clone

const zombie2 = prototypeZombie.clone();
zombie2.health = 50; // This zombie is injured

console.log(prototypeZombie.health); // Still 100
console.log(zombie1.health);         // 100
console.log(zombie2.health);         // 50