import type { IObserver } from "./iobserver.js";

export class YouTubeChannel {
    private subscribers: IObserver[] = [];

    public subscribe(observer: IObserver): void {
        this.subscribers.push(observer);
    }

    public unsubscribe(observer: IObserver): void {
        this.subscribers = this.subscribers.filter(sub => sub !== observer);
    }

    public uploadVideo(title: string): void {
        console.log(`Channel: Uploading "${title}"...`);
        this.notifySubscribers(title);
    }

    private notifySubscribers(title: string): void {
        for (const sub of this.subscribers) {
            sub.update(title);
        }
    }
}