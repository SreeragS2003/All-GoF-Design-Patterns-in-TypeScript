import { TreeFactory } from "./flyweightFactory.js";
import { Tree } from "./uniqueObject.js";

const forest = [];

// Get the shared "Oak" type
const oakType = TreeFactory.getTreeType("Oak", "Green", "oak_texture.png"); //Create heavy data once and reuse it. 
// The first time we call getTreeType with "Oak", it creates a new TreeType and stores it in the cache. Subsequent calls with the same parameters will return the cached instance, saving memory by sharing the heavy data (the texture) across all Oak trees.

// Plant 500 Oaks
for (let i = 0; i < 500; i++) {
    forest.push(new Tree(Math.random() * 100, Math.random() * 100, oakType)); //Adding the unique trees to the forest, but they all share the same Oak type. Each tree has its own coordinates (x, y), but they all reference the same Oak TreeType instance, which contains the heavy texture data.
}

// Get the shared "Pine" type
const pineType = TreeFactory.getTreeType("Pine", "Dark Green", "pine_texture.png");

// Plant 500 Pines
for (let i = 0; i < 500; i++) {
    forest.push(new Tree(Math.random() * 100, Math.random() * 100, pineType));
}

forest[0]?.draw(); //When we call draw on a tree, it uses the shared TreeType to render itself. The first tree will render as an Oak, and the 501st tree will render as a Pine, but they both share their respective types, demonstrating the Flyweight pattern in action.
forest[500]?.draw();