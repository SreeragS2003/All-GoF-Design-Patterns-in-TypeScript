import { DrivingStrategy, WalkingStrategy } from "./concreteStrategies.js";
import { Navigator } from "./navigator.js";

const myNav = new Navigator(new DrivingStrategy()); //Drive from "Home" to "Work"
myNav.buildRoute("Home", "Work");

// The user decides to walk instead
myNav.setStrategy(new WalkingStrategy());
myNav.buildRoute("Home", "Park");