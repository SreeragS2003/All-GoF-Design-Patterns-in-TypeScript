import { YouTubeChannel } from "./publisher.js";
import { EmailService, PhoneApp } from "./subscriber.js";

const myChannel = new YouTubeChannel();

const phone = new PhoneApp();
const email = new EmailService();

myChannel.subscribe(phone);
myChannel.subscribe(email);

// Both phone and email will be notified
myChannel.uploadVideo("Design Patterns 101");

myChannel.unsubscribe(email); // Email service unsubscribed

// Only phone will be notified
myChannel.uploadVideo("TypeScript Mastery");