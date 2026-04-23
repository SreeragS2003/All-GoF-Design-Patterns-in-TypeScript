//Common interface for both the real service and the proxy. This allows the proxy to be used interchangeably with the real service without the client needing to know which one it's using.
export interface IVideoService {
    getVideo(id: string): string;
}