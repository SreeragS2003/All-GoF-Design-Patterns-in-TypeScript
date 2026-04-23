import type { ITarget } from "./itargetCode.js";
import type { LegacySystem } from "./legacyCode.js";

export class XmlToJsonAdapter implements ITarget {
    private legacySystem: LegacySystem;

    constructor(legacySystem: LegacySystem) {
        this.legacySystem = legacySystem;
    }

    public request(): string {
        // 1. Get the ugly XML data from the legacy system
        const xmlData = this.legacySystem.specificRequest();
        
        // 2. "Translate" it to json (simplified for this example)
        const jsonData = xmlData
            .replace("<<XML_DATA>>", '{"data": "')
            .replace("</XML_DATA>>", '"}');
        
        // 3. Return the format the modern app expects
        return jsonData;
    }
}