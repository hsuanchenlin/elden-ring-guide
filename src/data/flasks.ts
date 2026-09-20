import type { FlaskPickup } from "./types";

export const flaskPickups: FlaskPickup[] = [
  {
    id: "seed-keepsake",
    kind: "golden-seed",
    name: "Keepsake Golden Seed",
    zone: "limgrave",
    location: "Character creation",
    detail:
      "Optional keepsake. Worth taking on a first playthrough; an extra flask charge outpaces the Crimson Amber Medallion once you have Torrent.",
    priority: "first-hours",
  },
  {
    id: "seed-stormhill",
    kind: "golden-seed",
    name: "Stormhill sapling",
    zone: "limgrave",
    location: "Road past Stormgate, near Stormhill Shack",
    detail: "The first sapling on the route. Ride through Stormgate, stay left of the broken bridge path.",
    priority: "first-hours",
  },
  {
    id: "seed-fort-haight",
    kind: "golden-seed",
    name: "Fort Haight courtyard",
    zone: "limgrave",
    location: "East Limgrave, entrance to Fort Haight",
    detail: "Sitting by the fort gate. Pair with the Dectus Medallion (Left) chest at the top of the keep.",
    priority: "first-hours",
  },
  {
    id: "seed-weeping",
    kind: "golden-seed",
    name: "Castle Morne approach",
    zone: "limgrave",
    location: "Weeping Peninsula, road toward Castle Morne",
    detail: "Golden tree beside the road after the Castle Morne Rampart grace. Free if you loop the peninsula.",
    priority: "first-hours",
  },
  {
    id: "seed-stormveil-cell",
    kind: "golden-seed",
    name: "Stormveil Secluded Cell",
    zone: "limgrave",
    location: "Stormveil Castle, near the Secluded Cell grace",
    detail: "On the path toward Godrick, by Nepheli's room. Do not walk into the fog without it.",
    priority: "on-route",
  },
  {
    id: "seed-stormveil-spirit",
    kind: "golden-seed",
    name: "Stormveil Tree Spirit",
    zone: "limgrave",
    location: "Stormveil Castle, lower courtyard",
    detail: "Dropped by the Ulcerated Tree Spirit under the castle. Optional if the boss still walls you.",
    priority: "detour",
  },
  {
    id: "seed-gate-town",
    kind: "golden-seed",
    name: "Academy Gate Town",
    zone: "liurnia",
    location: "Liurnia, Academy Gate Town",
    detail: "Sapling among the submerged ruins on the way to the academy gate.",
    priority: "on-route",
  },
  {
    id: "seed-academy-bridge",
    kind: "golden-seed",
    name: "Main Academy Gate bridge",
    zone: "liurnia",
    location: "North end of the bridge from Main Academy Gate",
    detail: "Ride the teleport from the south gate, then walk the bridge north rather than south into the maze.",
    priority: "on-route",
  },
  {
    id: "seed-raya-courtyard",
    kind: "golden-seed",
    name: "Raya Lucaria courtyard",
    zone: "liurnia",
    location: "West of the courtyard after the Red Wolf",
    detail: "After the debate parlor, before Rennala. Easy to miss if you tunnel to the boss fog.",
    priority: "on-route",
  },
  {
    id: "seed-caria",
    kind: "golden-seed",
    name: "Caria Manor",
    zone: "liurnia",
    location: "Past the Manor Upper Level grace",
    detail: "Optional west-Liurnia seed if you take Ranni's porch before Altus.",
    priority: "detour",
  },
  {
    id: "seed-ravine",
    kind: "golden-seed",
    name: "Ruin-Strewn Precipice approach",
    zone: "liurnia",
    location: "Southwest of Ravine-Veiled Village",
    detail: "On the alternate climb to Altus. Skip if you already have both Dectus halves.",
    priority: "detour",
  },
  {
    id: "seed-redmane-road",
    kind: "golden-seed",
    name: "Redmane Castle road",
    zone: "caelid",
    location: "Southern Caelid, road toward Redmane Castle",
    detail: "Sapling on the festival approach. Take it before Radahn.",
    priority: "on-route",
  },
  {
    id: "seed-sellia",
    kind: "golden-seed",
    name: "Sellia, Town of Sorcery",
    zone: "caelid",
    location: "Inside Sellia once the barriers drop",
    detail: "Light the three towers, then loot the town seed.",
    priority: "on-route",
  },
  {
    id: "seed-highway",
    kind: "golden-seed",
    name: "Altus Highway Junction",
    zone: "altus",
    location: "Beside the Altus Highway Junction grace",
    detail: "You will see the sapling as you leave the Grand Lift road. Free.",
    priority: "on-route",
  },
  {
    id: "seed-gazing-hill",
    kind: "golden-seed",
    name: "Erdtree-Gazing Hill",
    zone: "altus",
    location: "Near the Erdtree-Gazing Hill grace",
    detail: "On the rise looking toward the capital. Short ride from the highway.",
    priority: "on-route",
  },
  {
    id: "seed-phantom-tree",
    kind: "golden-seed",
    name: "Outer Wall Phantom Tree",
    zone: "altus",
    location: "Capital Outskirts, Outer Wall Phantom Tree grace",
    detail: "Two seeds under one phantom tree. The best flask spike before Leyndell.",
    priority: "on-route",
    quantity: 2,
  },
  {
    id: "seed-leyndell-spirit",
    kind: "golden-seed",
    name: "Leyndell Tree Spirit",
    zone: "leyndell",
    location: "Royal Capital, lower interior",
    detail: "Dropped by an Ulcerated Tree Spirit inside the capital. Take it if the fight is on your path.",
    priority: "detour",
  },
  {
    id: "tear-third-church",
    kind: "sacred-tear",
    name: "Third Church of Marika",
    zone: "limgrave",
    location: "East Limgrave, north of Mistwood",
    detail:
      "First tear on most routes. A waygate hidden in the bushes north of the church sends you to the Bestial Sanctum in Dragonbarrow; do not take it until you mean to visit.",
    priority: "first-hours",
  },
  {
    id: "tear-callu",
    kind: "sacred-tear",
    name: "Callu Baptismal Church",
    zone: "limgrave",
    location: "Weeping Peninsula, central woods",
    detail: "Guarded by rats and a flame trap. Still a first-day pickup.",
    priority: "first-hours",
  },
  {
    id: "tear-pilgrimage",
    kind: "sacred-tear",
    name: "Church of Pilgrimage",
    zone: "limgrave",
    location: "Weeping Peninsula, northern cliff",
    detail: "Open church on the high coast. Demi-humans nearby, nothing nasty inside.",
    priority: "first-hours",
  },
  {
    id: "tear-fourth-church",
    kind: "sacred-tear",
    name: "Fourth Church of Marika",
    zone: "limgrave",
    location: "Weeping Peninsula, western coast",
    detail: "Beside the Witchbane Ruins. Completes the peninsula's three-tear loop.",
    priority: "first-hours",
  },
  {
    id: "tear-irith",
    kind: "sacred-tear",
    name: "Church of Irith",
    zone: "liurnia",
    location: "Lake-Facing Cliffs, just after Stormveil",
    detail: "You walk through this church to enter Liurnia. There is no excuse to miss it.",
    priority: "on-route",
  },
  {
    id: "tear-bellum",
    kind: "sacred-tear",
    name: "Bellum Church",
    zone: "liurnia",
    location: "Bellum Highway, near the Grand Lift of Dectus",
    detail: "On the way to the lift. Frenzy enemies on the highway; ride through.",
    priority: "on-route",
  },
  {
    id: "tear-inhibition",
    kind: "sacred-tear",
    name: "Church of Inhibition",
    zone: "liurnia",
    location: "Northeast Liurnia, Frenzied Flame village",
    detail: "Madness buildup on the approach. Grab the tear and the chest, then leave.",
    priority: "detour",
  },
  {
    id: "tear-plague",
    kind: "sacred-tear",
    name: "Church of the Plague",
    zone: "caelid",
    location: "Hill above Sellia, Town of Sorcery",
    detail: "Millicent rests here later. The tear is available as soon as you climb from Sellia.",
    priority: "on-route",
  },
  {
    id: "tear-second-church",
    kind: "sacred-tear",
    name: "Second Church of Marika",
    zone: "altus",
    location: "Western Altus Plateau",
    detail: "Often hosts an invasion. The tear sits at the altar regardless.",
    priority: "on-route",
  },
  {
    id: "tear-stormcaller",
    kind: "sacred-tear",
    name: "Stormcaller Church",
    zone: "altus",
    location: "East Altus, on the lightning plain toward the capital",
    detail: "Ancient Dragon Cult territory. Short detour east of the outer wall road.",
    priority: "on-route",
  },
];

export const seedThresholds = [
  { charges: 4, totalSeeds: 0 },
  { charges: 5, totalSeeds: 1 },
  { charges: 6, totalSeeds: 2 },
  { charges: 7, totalSeeds: 4 },
  { charges: 8, totalSeeds: 6 },
  { charges: 9, totalSeeds: 9 },
  { charges: 10, totalSeeds: 12 },
  { charges: 11, totalSeeds: 16 },
  { charges: 12, totalSeeds: 20 },
  { charges: 13, totalSeeds: 25 },
  { charges: 14, totalSeeds: 30 },
] as const;

export function flaskChargesFromSeeds(seeds: number): number {
  const clamped = Math.max(0, Math.floor(seeds));
  let charges = 4;
  for (const row of seedThresholds) {
    if (clamped >= row.totalSeeds) charges = row.charges;
  }
  return charges;
}

export function seedsToNextCharge(seeds: number): {
  nextCharges: number | null;
  seedsNeeded: number;
} {
  const current = flaskChargesFromSeeds(seeds);
  const next = seedThresholds.find((row) => row.charges === current + 1);
  if (!next) return { nextCharges: null, seedsNeeded: 0 };
  return { nextCharges: next.charges, seedsNeeded: next.totalSeeds - Math.max(0, seeds) };
}

export function pickupsByKind(kind: FlaskPickup["kind"]): FlaskPickup[] {
  return flaskPickups.filter((pickup) => pickup.kind === kind);
}

export function pickupQuantity(pickup: FlaskPickup): number {
  return pickup.quantity ?? 1;
}

export function totalQuantity(pickups: readonly FlaskPickup[]): number {
  return pickups.reduce((total, pickup) => total + pickupQuantity(pickup), 0);
}
