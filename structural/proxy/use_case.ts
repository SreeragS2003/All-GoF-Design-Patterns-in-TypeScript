import { CachedYouTubeProxy } from "./proxy.js";
import { YouTubeService } from "./realService.js";

const realService = new YouTubeService();
const proxy = new CachedYouTubeProxy(realService);

// First time: Proxy calls the real service
console.log(proxy.getVideo("design-patterns-101"));

// Second time: Proxy answers immediately from cache
console.log(proxy.getVideo("design-patterns-101"));