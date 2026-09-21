import type { ZoneId } from "./types";

/**
 * Official zh-TW renderings of the catalogue fields shown on /zh-tw, keyed by the ids in
 * zones.ts and builds.ts. Numeric brackets must match the English entries.
 */
export const zoneCopyZhTw: Record<
  ZoneId,
  { name: string; epithet: string; levelRange: string; weaponUpgrade: string; somberUpgrade: string; vigorTarget: string }
> = {
  limgrave: {
    name: "寧姆格福",
    epithet: "最初的賜福",
    levelRange: "1-40",
    weaponUpgrade: "+0 至 +4",
    somberUpgrade: "+0 至 +2",
    vigorTarget: "瑪爾基特前 20，擊敗葛瑞克後 25",
  },
  liurnia: {
    name: "利耶尼亞",
    epithet: "學院水域",
    levelRange: "40-60",
    weaponUpgrade: "+4 至 +8",
    somberUpgrade: "+2 至 +3",
    vigorTarget: "蕾娜菈前 30",
  },
  caelid: {
    name: "蓋利德",
    epithet: "猩紅荒野",
    levelRange: "60-80（南部）",
    weaponUpgrade: "+10 至 +12",
    somberUpgrade: "+4 至 +5",
    vigorTarget: "拉塔恩前 35-40",
  },
  altus: {
    name: "亞壇高原",
    epithet: "黃金高地",
    levelRange: "70-80",
    weaponUpgrade: "+12 至 +15",
    somberUpgrade: "+5 至 +6",
    vigorTarget: "40",
  },
  leyndell: {
    name: "王城羅德爾",
    epithet: "黃金律法之座",
    levelRange: "90-110",
    weaponUpgrade: "+16 至 +20",
    somberUpgrade: "+6 至 +8",
    vigorTarget: "40-50",
  },
};

export const starterBuildCopyZhTw: Record<string, { className: string; archetype: string }> = {
  vagabond: { className: "流浪騎士", archetype: "力氣／強韌" },
  samurai: { className: "武士", archetype: "出血／靈巧" },
  astrologer: { className: "占星家", archetype: "輝石魔法" },
};

export const statCopyZhTw: Record<string, string> = {
  Vigor: "生命力",
  Mind: "集中力",
  Endurance: "耐力",
  Strength: "力氣",
  Dexterity: "靈巧",
  Intelligence: "智力",
  Faith: "信仰",
  Arcane: "感應",
};
