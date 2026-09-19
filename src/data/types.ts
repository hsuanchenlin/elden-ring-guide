export type ZoneId = "limgrave" | "liurnia" | "caelid" | "altus" | "leyndell";

export interface Landmark {
  id: string;
  title: string;
  detail: string;
  optional?: boolean;
}

export interface Zone {
  id: ZoneId;
  order: number;
  name: string;
  shortName: string;
  epithet: string;
  levelRange: string;
  weaponUpgrade: string;
  somberUpgrade: string;
  vigorTarget: string;
  summary: string;
  approach: string;
  bosses: { name: string; note: string }[];
  landmarks: Landmark[];
  warnings: string[];
  accent: string;
}

export type FlaskKind = "golden-seed" | "sacred-tear";

export interface FlaskPickup {
  id: string;
  kind: FlaskKind;
  name: string;
  zone: ZoneId;
  location: string;
  detail: string;
  priority: "first-hours" | "on-route" | "detour";
}

export interface StarterBuild {
  id: string;
  className: string;
  archetype: string;
  tagline: string;
  startingLevel: number;
  stats: Record<string, number>;
  kit: string[];
  keepsake: string;
  leveling: string[];
  earlyWeapons: { name: string; where: string }[];
  playstyle: string[];
  pitfalls: string[];
}
