import { TreeType } from "./flyweight.js";
//This is the "Gatekeeper." It ensures we never create the same "heavy" data twice. It keeps a cache (a Map) of existing types.
export class TreeFactory {
    private static treeTypes = new Map<string, TreeType>();

    public static getTreeType(name: string, color: string, texture: string): TreeType {
        const key = `${name}_${color}`;
        
        if (!this.treeTypes.has(key)) {
            console.log(`Creating NEW shared TreeType: ${name}`);
            this.treeTypes.set(key, new TreeType(name, color, texture));
        }
        
        return this.treeTypes.get(key)!;
    }
}