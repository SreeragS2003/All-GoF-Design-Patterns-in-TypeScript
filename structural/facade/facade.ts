import { PhysicsEngine, Renderer, SoundSystem } from "./complexSystems.js";

export class GameFacade {
    private physics = new PhysicsEngine(); //Instance variables initialized with instances of the complex subsystems. The facade will manage these instances and coordinate their interactions.
    private sound = new SoundSystem();
    private renderer = new Renderer();

    public startGame(): void { //The client will use this function to start the game, and the facade will handle all the complex interactions behind the scenes.
        console.log("--- Preparing to Launch Game ---");
        this.renderer.createWindow();
        this.physics.init();
        this.sound.loadAssets();
        this.sound.playMusic();
        console.log("--- Game is Live! ---");
    }
}