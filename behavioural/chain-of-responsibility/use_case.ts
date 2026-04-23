import { BillingHandler, TechnicalHandler } from "./concreteHandler.js";

const tech = new TechnicalHandler();
const billing = new BillingHandler();

// Build the chain: Tech -> Billing
tech.setNext(billing);

// The client just sends requests to the first link
console.log(tech.handle("REFUND"));        // "Billing Dept: Processing your refund now."
console.log(tech.handle("HARDWARE_FAIL")); // "Technical Dept: We will replace your device."
console.log(tech.handle("WIFI_PASSWORD")); // null (End of chain)