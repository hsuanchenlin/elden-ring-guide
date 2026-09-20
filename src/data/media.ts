import type { MediaManifest } from "./types";

/**
 * Media manifest recording permitted visual content sources, capture dates, and policy basis.
 * Only self-captured gameplay screenshots and official trailer embeds are permitted.
 * No press-kit, official-site, wiki, or Commons game imagery is rehosted or claimed.
 */
export const mediaManifest: MediaManifest = {
  policy:
    "Individually operated non-commercial fan site. Self-captured gameplay screenshots and official trailer embeds only. Never download or rehost press-kit, official-site, wiki, or Commons assets.",
  trailers: [
    {
      id: "official-launch",
      youtubeId: "AKXiKB_8JLI",
      title: "Elden Ring Official Launch Trailer",
      source: "Bandai Namco Entertainment official YouTube",
      published: "2022-02-25",
      policy: "Official embed permitted; click-to-load privacy facade used",
    },
  ],
  screenshots: [
    // None yet. Future entries must record capture date, device, and confirm self-captured.
    // Example shape: { id: "...", src: "...", captureDate: "2025-...", policy: "self-captured gameplay" }
  ],
};
