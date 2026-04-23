import { ArrayIterator } from "./concreteIterator.js";
import type { ICollection } from "./iCollection.js";
import type { IIterator } from "./iIterator.js";

export class MusicPlaylist implements ICollection<string> {
    private songs: string[] = [];

    public addSong(song: string) {
        this.songs.push(song);
    }

    public createIterator(): IIterator<string> {
        return new ArrayIterator(this.songs); //The concrete collection creates the concrete iterator and passes itself to it
    }
}