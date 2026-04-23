import { XmlToJsonAdapter } from "./adapter.js";
import type { ITarget } from "./itargetCode.js";
import { LegacySystem } from "./legacyCode.js";

function runApp(target: ITarget) {
    console.log(target.request());
}

const legacy = new LegacySystem();
const adapter = new XmlToJsonAdapter(legacy);

runApp(adapter); // Output: {"data": "Legacy Data Content"}