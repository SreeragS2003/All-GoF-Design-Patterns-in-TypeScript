import { PizzaBuilder } from "./builder.js";

const myLunch = new PizzaBuilder()
    .setCrust("Thin")
    .setSauce("BBQ")
    .addTopping("Chicken")
    .addTopping("Red Onions")
    .build(); //build will return the final Pizza instance, of type Pizza

myLunch.describe(); //Calling describe method of Pizza class to print the details of the pizza we just built.