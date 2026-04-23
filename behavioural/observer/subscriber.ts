import type { IObserver } from "./iobserver.js";

export class PhoneApp implements IObserver { //A phone app that subscribes to the YouTube channel to receive notifications about new videos. It implements the IObserver interface, which requires it to have an update method that the publisher will call when a new video is uploaded.
    update(title: string): void {
        console.log(`[Phone Notification]: New video out: ${title}`);
    }
}

export class EmailService implements IObserver { //An email service that also subscribes to the YouTube channel. It implements the same IObserver interface, allowing it to receive updates in the same way as the phone app, demonstrating how multiple different subscribers can react to the same publisher's notifications.
    update(title: string): void {
        console.log(`[Email]: Check out the latest video: ${title}`);
    }
}