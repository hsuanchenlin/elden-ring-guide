import type { ZoneId } from "./types";

/**
 * Official zh-TW renderings of the catalogue fields shown on /zh-tw, keyed by the ids in
 * zones.ts and builds.ts. Numeric brackets must match the English entries.
 */
export const zoneCopyZhTw: Record<ZoneId, { name: string; levelRange: string; weaponUpgrade: string }> = {
  limgrave: { name: "寧姆格福", levelRange: "1-40", weaponUpgrade: "+0 至 +4" },
  liurnia: { name: "利耶尼亞", levelRange: "40-60", weaponUpgrade: "+4 至 +8" },
  caelid: { name: "蓋利德", levelRange: "60-80（南部）", weaponUpgrade: "+10 至 +12" },
  altus: { name: "亞壇高原", levelRange: "70-80", weaponUpgrade: "+12 至 +15" },
  leyndell: { name: "王城羅德爾", levelRange: "90-110", weaponUpgrade: "+16 至 +20" },
};

export const starterBuildCopyZhTw: Record<string, { className: string; archetype: string }> = {
  vagabond: { className: "流浪騎士", archetype: "力氣／強韌" },
  samurai: { className: "武士", archetype: "出血／靈巧" },
  astrologer: { className: "占星家", archetype: "輝石魔法" },
};
