import type { IVideoService } from "./iVideoService.js";
import type { YouTubeService } from "./realService.js";

export class CachedYouTubeProxy implements IVideoService {
    private service: YouTubeService;
    private cache: Map<string, string> = new Map();

    constructor(service: YouTubeService) {
        this.service = service;
    }

    public getVideo(id: string): string {
        // 1. Check if we already have the answer (Caching)
        if (this.cache.has(id)) {
            console.log(`Proxy: Returning cached data for ${id}`);
            return this.cache.get(id)!;
        }

        // 2. If not, go to the real service
        const video = this.service.getVideo(id);
        
        // 3. Save it for later
        this.cache.set(id, video);
        return video;
    }
}