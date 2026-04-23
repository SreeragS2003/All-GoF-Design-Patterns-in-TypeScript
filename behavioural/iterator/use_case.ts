import { MusicPlaylist } from "./concreteCollection.js";

const playlist = new MusicPlaylist(); //Concrete collection
playlist.addSong("Song A");
playlist.addSong("Song B");
playlist.addSong("Song C");

const iterator = playlist.createIterator(); //Creating iterator by using the method of concrete collection

while (iterator.hasNext()) { //Doesn't need to be changed even if we change the underlying iterator implementation (e.g., from ArrayIterator to LinkedListIterator), as long as they both adhere to the IIterator interface
    console.log(`Playing: ${iterator.next()}`);
}