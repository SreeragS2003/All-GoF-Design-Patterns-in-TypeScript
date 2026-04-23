export default class Leaderboard {
    // 1. We store the single instance here
    private static instance: Leaderboard;

    // 2. We use a private variable for the data (# is a JS private field)
    private table: { [id: number]: string } = {};

    // 3. The Constructor is PRIVATE. 
    // This means "new Leaderboard()" will throw an error outside this class.
    private constructor() {}

    // 4. This is the only way to get the Leaderboard
    public static getInstance(): Leaderboard {
        //If there is no instance, create one. Otherwise, return the existing one.
        if (!Leaderboard.instance) {
            //So the object created is stored inside the class itself, and the next time getInstance is called, it will return the same object.
            Leaderboard.instance = new Leaderboard();
        }
        return Leaderboard.instance;
    }

    public addWinner(position: number, name: string): void {
        this.table[position] = name;
    }

    public print(): void {
        console.log('-----------Leaderboard-----------');
        for (const key in this.table) {
            console.log(`|\t${key}\t|\t${this.table[key]}\t|`);
        }
    }
}