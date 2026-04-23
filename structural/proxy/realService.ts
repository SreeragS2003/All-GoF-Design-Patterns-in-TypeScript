import type { IVideoService } from "./iVideoService.js";

export class YouTubeService implements IVideoService {
    public getVideo(id: string): string {
        console.log(`--- Fetching video ${id} from YouTube API (Expensive!) ---`);
        return `Video Data for ${id}`;
    }
}