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
  /** How many seeds/tears this location yields; 1 when omitted. */
  quantity?: number;
}

/** Approximate pin on a zone schematic. Percentages are from the west/north edges. */
export interface ItemMapPin {
  zone: ZoneId;
  x: number;
  y: number;
  certainty: "confirmed" | "approximate";
}

/**
 * Traditional Chinese acquisition copy and map-placeholder metadata for a catalogue item.
 * Visuals use a blank labeled placeholder until the captain supplies a screenshot.
 */
export interface ItemAcquisition {
  id: string;
  nameZhTw: string;
  locationZhTw: string;
  howToGetZhTw: string;
  /** Overworld or dungeon pin. Omitted when the item has no single field position. */
  pin?: ItemMapPin;
  alt: string;
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

export interface Trailer {
  youtubeId: string;
  title: string;
  publisher: string;
  published: string;
}

export type ChallengeCategory = "weapon-only" | "no-hp-leveling" | "no-item";

export interface ChallengeVideo {
  youtubeId: string;
  title: string;
  category: ChallengeCategory;
  runner: string;
  published: string;
}
