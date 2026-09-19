import type { StarterBuild } from "./types";

export const starterBuilds: StarterBuild[] = [
  {
    id: "vagabond",
    className: "Vagabond",
    archetype: "Strength / poise",
    tagline: "Heavy armor, a real shield, and weapons that knock the Lands Between off its feet.",
    startingLevel: 9,
    stats: {
      Vigor: 15,
      Mind: 10,
      Endurance: 11,
      Strength: 14,
      Dexterity: 13,
      Intelligence: 9,
      Faith: 9,
      Arcane: 7,
    },
    kit: [
      "Longsword",
      "Halberd",
      "Heater Shield",
      "Vagabond Knight set (starts slightly over heavy load)",
    ],
    keepsake: "Golden Seed, or Crimson Amber Medallion if you want the extra HP immediately.",
    leveling: [
      "Endurance to 15 so the knight set rolls at medium load. Drop the helm until then.",
      "Vigor to 20 before Margit, then 30 as you enter Liurnia.",
      "Strength to 24 (36 two-handed) for the Greatsword and most early colossal arms.",
      "Keep Vigor near half your level until 40. Damage stats can wait; deaths cannot.",
    ],
    earlyWeapons: [
      { name: "Lordsworn's Greatsword", where: "Chest in Gatefront Ruins wagons" },
      { name: "Bloodhound's Fang", where: "Forlorn Hound Evergaol, south Limgrave (somber)" },
      { name: "Claymore", where: "Castle Morne, Weeping Peninsula" },
      { name: "Greatsword", where: "Carriage in north Caelid, on the Dragonbarrow border road" },
    ],
    playstyle: [
      "Two-hand for the 1.5x Strength modifier unless you are learning a move with the heater shield up.",
      "Jump heavy attacks break poise. Most elite enemies and many bosses stagger in two or three jumps.",
      "Block only what you have not learned. The heater shield is a crutch with a time limit.",
    ],
    pitfalls: [
      "Do not dump early runes into Faith or Intelligence. This archetype wins with Vigor, Endurance, and Strength.",
      "Colossal weapons are slow. If a fight feels impossible, swap to the Fang or Claymore rather than raising Strength again.",
    ],
  },
  {
    id: "samurai",
    className: "Samurai",
    archetype: "Bleed / dexterity",
    tagline: "The Uchigatana inflicts blood loss from the first hour, and the longbow lets you pick the fight.",
    startingLevel: 9,
    stats: {
      Vigor: 12,
      Mind: 11,
      Endurance: 13,
      Strength: 12,
      Dexterity: 15,
      Intelligence: 9,
      Faith: 8,
      Arcane: 8,
    },
    kit: ["Uchigatana (innate bleed)", "Longbow with arrows and fire arrows", "Red Thorn Roundshield", "Land of Reeds set"],
    keepsake: "Golden Seed. The Samurai already has a complete weapon.",
    leveling: [
      "Vigor to 20 immediately. You start squishier than the Vagabond.",
      "Dexterity to 18 for Bloodhound's Fang, then 24 as katanas and curved swords come online.",
      "A few points of Arcane only if you move to Occult or Rivers of Blood later. Bleed works without it on the Uchi.",
      "Vigor 30 by Rennala, 40 by Radahn.",
    ],
    earlyWeapons: [
      { name: "Uchigatana", where: "Starting weapon. A second Uchi is in Deathtouched Catacombs, Limgrave." },
      { name: "Bloody Slash (Ash of War)", where: "Fort Haight, dropped by the knight on the rampart" },
      { name: "Bloodhound's Fang", where: "Forlorn Hound Evergaol. Still one of the best bleed-adjacent arms." },
      { name: "Reduvia", where: "Bloody Finger Nerijus invasion in Murkwater, Limgrave" },
    ],
    playstyle: [
      "Unsheathe (the Uchi skill) is a true combo into bleed. Use it on stance breaks and on enemies that finish an attack.",
      "The longbow exists to pull one enemy out of a pack. Do not enter Gatefront swinging.",
      "Blood loss is a percentage chunk. It is at its best on large bosses, not on already-fragile soldiers.",
    ],
    pitfalls: [
      "Bleed does not work on everyone. Constructs, skeletons, and some omens shrug it off. Keep a raw damage ash.",
      "Light armor means you cannot trade. If you are rolling late, raise Vigor before you raise Dexterity.",
    ],
  },
  {
    id: "astrologer",
    className: "Astrologer",
    archetype: "Glintstone sorcery",
    tagline: "The cleanest mage start: 16 Intelligence, Glintstone Pebble, and a staff that only needs to last until Caelid.",
    startingLevel: 6,
    stats: {
      Vigor: 9,
      Mind: 15,
      Endurance: 9,
      Strength: 8,
      Dexterity: 12,
      Intelligence: 16,
      Faith: 7,
      Arcane: 9,
    },
    kit: ["Astrologer's Staff", "Short Sword", "Scripture Wooden Shield", "Glintstone Pebble", "Glintstone Arc", "Astrologer set"],
    keepsake: "Golden Seed, or the Crimson Amber Medallion. You have the least HP of any serious start.",
    leveling: [
      "Vigor to 20 before you bother with more Intelligence. Pebble already kills Limgrave.",
      "Intelligence to 18 for Carian Slicer, 30 for the academy kit, 40 before Leyndell.",
      "Mind to 20 once you have more than two useful spells. Flask allocation should lean Cerulean until vigor is safe.",
      "Do not ignore Endurance entirely; a medium roll in light armor still needs a few points.",
    ],
    earlyWeapons: [
      { name: "Meteorite Staff", where: "Street of Sages Ruins, Caelid swamp. S-scale in Intelligence, no upgrade path." },
      { name: "Rock Sling", where: "Chest in the Street of Sages cellar. Gravity damage that breaks poise." },
      { name: "Carian Slicer", where: "Bought from Sellen (Waypoint Ruins) or Miriel after finding the scroll." },
      { name: "Spirit Calling Bell + Lone Wolf Ashes", where: "Church of Elleh, from Renna / Ranni after Torrent" },
    ],
    playstyle: [
      "Summon wolves or a tankier ash, then Pebble from outside melee range. You are not a battle-mage until Carian Slicer.",
      "Meet Sellen under Waypoint Ruins as soon as you have Torrent. She is the sorcery shop until the academy.",
      "Meteorite Staff plus Rock Sling is a legitimate mid-game boss plan. Fetch it from south Caelid once Limgrave is stable, not at level 12.",
    ],
    pitfalls: [
      "The Tree Sentinel will still flatten you. Ride past.",
      "Never spend a full flask bar on damage while vigor is under 20. Dead mages deal no damage.",
      "The Meteorite Staff stops scaling when other staves can be upgraded past it. Replace it around Altus with an Academy or Carian staff at +8 or better.",
    ],
  },
];

export function getBuild(id: string): StarterBuild | undefined {
  return starterBuilds.find((build) => build.id === id);
}
