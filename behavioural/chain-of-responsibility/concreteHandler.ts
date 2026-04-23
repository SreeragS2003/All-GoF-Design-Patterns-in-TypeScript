import { Handler } from "./handler.js";

export class TechnicalHandler extends Handler {
    public handle(request: string): string | null {
        if (request === "HARDWARE_FAIL") {
            return "Technical Dept: We will replace your device.";
        }
        // If the technical handler can't process the request, it passes it to the next handler in the chain (if any).
        return super.handle(request);
    }
}

export class BillingHandler extends Handler {
    public handle(request: string): string | null {
        if (request === "REFUND") {
            return "Billing Dept: Processing your refund now.";
        }
        return super.handle(request);
    }
}