export function extractEpisode(input: string): string | null {
    const regex = /episode-(\d+)/;
    const match = input.match(regex);
    return match ? match[0] : null;
  }

/* eslint-disable @typescript-eslint/no-unused-vars */
function extractEpisodeNumber(input: string): number | null {
    const regex = /episode-(\d+)/;
    const match = input.match(regex);
       
    return match ? parseInt(match[1], 10) : null;
}