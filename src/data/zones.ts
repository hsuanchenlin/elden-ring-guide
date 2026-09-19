import type { Zone } from "./types";

export const zones: Zone[] = [
  {
    id: "limgrave",
    order: 1,
    name: "Limgrave",
    shortName: "Limgrave",
    epithet: "The first grace",
    levelRange: "1-40",
    weaponUpgrade: "+0 to +4",
    somberUpgrade: "+0 to +2",
    vigorTarget: "20 before Margit, 25 after Godrick",
    summary:
      "Learn the grammar of the Lands Between here: Sites of Grace, Torrent, the Roundtable, and the difference between a fair fight and a wall. Limgrave includes the Weeping Peninsula detour and Stormveil Castle.",
    approach:
      "Do not duel the Tree Sentinel at the Church of Elleh. Ride past, take the Gatefront map and Whetstone Knife, meet Melina for Torrent, then loop the Weeping Peninsula for flasks and a Claymore before you knock on Stormveil.",
    bosses: [
      {
        name: "Margit, the Fell Omen",
        note: "Stormveil gate. Use the spirit summoning bell from the Church of Elleh merchant after Torrent, and consider Margit's Shackle from Patches.",
      },
      {
        name: "Godrick the Grafted",
        note: "Stormveil throne. Stay mid-range, punish the wind-up grafts, and grab the golden seed by the Secluded Cell on the way in.",
      },
    ],
    landmarks: [
      {
        id: "lm-torrent",
        title: "Claim Torrent",
        detail:
          "Rest at the Gatefront Site of Grace so Melina offers Torrent. The Lands Between opens once you can ride.",
      },
      {
        id: "lm-gatefront",
        title: "Gatefront Ruins kit",
        detail:
          "Pick up the Limgrave East and West maps, the Whetstone Knife, and the Lordsworn's Greatsword in the chest among the wagons.",
      },
      {
        id: "lm-roundtable",
        title: "Reach Roundtable Hold",
        detail:
          "Melina takes you after you rest at a second grace beyond the start, or after you die to Margit. Smithing, merchants, and later Roderika live here.",
      },
      {
        id: "lm-weeping",
        title: "Weeping Peninsula loop",
        detail:
          "South of the Bridge of Sacrifice. Three Sacred Tears, a golden seed on the Castle Morne road, and the Claymore in Castle Morne. Ideal before Margit.",
      },
      {
        id: "lm-darriwil",
        title: "Forlorn Hound Evergaol",
        detail:
          "Optional. Bloodhound Knight Darriwil drops Bloodhound's Fang, a somber curved greatsword that carries every starter into mid-game.",
        optional: true,
      },
      {
        id: "lm-margit",
        title: "Defeat Margit",
        detail: "The true tutorial. Summons, jump attacks, and patience beat greed.",
      },
      {
        id: "lm-godrick",
        title: "Defeat Godrick",
        detail:
          "Godrick's Great Rune and the path into Liurnia. Remember to restore the rune at the Divine Tower of Limgrave later.",
      },
    ],
    warnings: [
      "Fringefolk Hero's Grave behind the Stranded Graveyard fog is a later dungeon. The grafted scion at the tutorial is meant to kill you once.",
      "Caelid's border is a short ride east of the Third Church of Marika. The grey rot is not a Limgrave-level zone.",
    ],
    accent: "#9aaa6a",
  },
  {
    id: "liurnia",
    order: 2,
    name: "Liurnia of the Lakes",
    shortName: "Liurnia",
    epithet: "The academy waters",
    levelRange: "40-60",
    weaponUpgrade: "+4 to +8",
    somberUpgrade: "+2 to +3",
    vigorTarget: "30 before Rennala",
    summary:
      "A wide, wet basin under Raya Lucaria. Sorcerers, crabs, and the first Great Rune that lets you respec. Liurnia is where flask potency and a real weapon affinity come online.",
    approach:
      "Exit Stormveil onto the Lake-Facing Cliffs, take the Church of Irith tear immediately, then hug the eastern land route to the Academy Gate Town. The Glintstone Key is on the fallen dragon north of the gate town. Caria Manor can wait until you are comfortable in the academy.",
    bosses: [
      {
        name: "Red Wolf of Radagon",
        note: "Academy debate parlor. Fast, punishing, and a check on your roll timing.",
      },
      {
        name: "Rennala, Queen of the Full Moon",
        note: "Great Rune of the Unborn: respec at the academy thereafter. Phase one is a student hunt; phase two is a spell duel.",
      },
    ],
    landmarks: [
      {
        id: "lm-irith",
        title: "Church of Irith",
        detail: "Sacred Tear on the cliff just outside Stormveil. Do not ride past it.",
      },
      {
        id: "lm-sellen",
        title: "Meet Sorceress Sellen",
        detail:
          "Waypoint Ruins cellar in Limgrave if you missed her, then her academy projection. Glintstone Pebble upgrades and Rock Sling start here.",
      },
      {
        id: "lm-glintstone-key",
        title: "Academy Glintstone Key",
        detail:
          "On the sleeping dragon (Glintstone Dragon Smarag) island northwest of Academy Gate Town. You can grab the key without committing to the dragon.",
      },
      {
        id: "lm-rennala",
        title: "Defeat Rennala",
        detail: "Unlock respec and a Great Rune. Staff and spell casters should linger for academy loot.",
      },
      {
        id: "lm-caria",
        title: "Caria Manor",
        detail:
          "Optional. Clears the west plateau, Ranni's quest porch, and a golden seed past the Manor Upper Level grace.",
        optional: true,
      },
      {
        id: "lm-dectus-left",
        title: "Dectus Medallion (Left)",
        detail:
          "Fort Haight in east Limgrave, if you have not already climbed it. Pair with the right half in Caelid's Fort Faroth.",
      },
    ],
    warnings: [
      "The Grand Lift of Dectus at Bellum Highway is the intended Altus door. Do not take it until Caelid's early stops are done unless you like being under-leveled.",
      "Church of Inhibition sits in the Frenzied Flame village. Grab the tear, do not linger in the madness AOE.",
    ],
    accent: "#4a6d8c",
  },
  {
    id: "caelid",
    order: 3,
    name: "Caelid",
    shortName: "Caelid",
    epithet: "The scarlet wilds",
    levelRange: "60-80 (south)",
    weaponUpgrade: "+10 to +12",
    somberUpgrade: "+4 to +5",
    vigorTarget: "35-40 before Radahn",
    summary:
      "Rot, dogs, and the Radahn Festival. South Caelid is a fair mid-game strip. Dragonbarrow, to the north, is a late-game trap painted the same color.",
    approach:
      "Enter from Limgrave's eastern border or the rot gorge behind Summonwater. Stick to the southern road: Fort Gael, Sellia Crystal Tunnel for somber stones, Redmane Castle. Grab Fort Faroth's Dectus Medallion (Right) with Torrent and a prayer; you do not need to clear Dragonbarrow to loot the chest.",
    bosses: [
      {
        name: "Starscourge Radahn",
        note: "Redmane Festival after you speak to Blaidd, Alexander, or the castle announcer. Summon every NPC in the fight; this is the game's intended spectacle.",
      },
    ],
    landmarks: [
      {
        id: "lm-caelid-map",
        title: "Caelid map fragments",
        detail:
          "Pick up the Caelid and Dragonbarrow maps from their stelae so the rot has names. Knowing the north is Dragonbarrow keeps you alive.",
      },
      {
        id: "lm-fort-faroth",
        title: "Dectus Medallion (Right)",
        detail:
          "Fort Faroth in Dragonbarrow. Ride in, climb the ladder, take the chest, leave. The bats are worse than the loot is mandatory.",
      },
      {
        id: "lm-sellia",
        title: "Sellia, Town of Sorcery",
        detail:
          "Light the three towers to drop the barriers. Golden seed in town, Church of the Plague tear on the hill above, and Gowry's quest if you want Millicent later.",
      },
      {
        id: "lm-radahn",
        title: "Defeat Starscourge Radahn",
        detail:
          "Opens Nokron for later and drops a Great Rune. Weapon upgrade should be around +10 / somber +4 before the festival.",
      },
      {
        id: "lm-meteorite",
        title: "Street of Sages Meteorite Staff",
        detail:
          "Optional but transformative for Astrologers. Street of Sages Ruins in the swamp. Rock Sling is in a nearby chest.",
        optional: true,
      },
    ],
    warnings: [
      "Dragonbarrow's open world, the Bestial Sanctum teleport chest, and Greyoll's dragon cluster are not south-Caelid difficulty.",
      "Scarlet rot builds; keep Preserving Boluses or a torch for dogs that grab.",
    ],
    accent: "#8c3b32",
  },
  {
    id: "altus",
    order: 4,
    name: "Altus Plateau",
    shortName: "Altus",
    epithet: "The golden uplands",
    levelRange: "70-80",
    weaponUpgrade: "+12 to +15",
    somberUpgrade: "+5 to +6",
    vigorTarget: "40",
    summary:
      "The approach to the capital. Knights hit harder, smithing stones jump a tier, and flask seeds sit on almost every major road. Altus is where a starter build should feel finished, not experimental.",
    approach:
      "Grand Lift of Dectus with both medallion halves, or the Ruin-Strewn Precipice from Liurnia's ravine if you want Magma Wyrm Makar and a somber stone. From the lift, take the Altus Highway Junction seed, then the Erdtree-Gazing Hill, then the outer wall.",
    bosses: [
      {
        name: "Draconic Tree Sentinel",
        note: "Capital gatekeeper. Lightning, a huge hitbox, and no shame in summoning. The alternate sewer entry exists but is not the Phase 1 route.",
      },
    ],
    landmarks: [
      {
        id: "lm-dectus",
        title: "Grand Lift of Dectus",
        detail: "Hoist the medallion. Welcome to the plateau.",
      },
      {
        id: "lm-altus-maps",
        title: "Altus maps and Highway Junction",
        detail:
          "Map fragment near the golden tree on the highway, plus the golden seed at Altus Highway Junction. This is your plateau hub.",
      },
      {
        id: "lm-second-church",
        title: "Second Church of Marika",
        detail: "Sacred Tear west of the highway, often with a Bloody Finger waiting. Worth the duel.",
      },
      {
        id: "lm-outer-wall",
        title: "Outer Wall Phantom Tree",
        detail:
          "Two golden seeds under the phantom tree before the capital rampart. One of the best flask spikes on the route.",
      },
      {
        id: "lm-mt-gelmir",
        title: "Mt. Gelmir / Volcano Manor",
        detail:
          "Optional mid-game detour. Strong weapons and a shardbearer, but Leyndell does not require it. Return if the capital walls you.",
        optional: true,
      },
    ],
    warnings: [
      "The northern Altus woods hide the Shaded Castle and Dung Eater's path; none of it is required to enter Leyndell.",
      "Windmill Village (Dominula) is a seed and a boss, not a second capital. Do it if you want the loot, not because the road looks important.",
    ],
    accent: "#c9a227",
  },
  {
    id: "leyndell",
    order: 5,
    name: "Leyndell, Royal Capital",
    shortName: "Leyndell",
    epithet: "The golden order's seat",
    levelRange: "90-110",
    weaponUpgrade: "+16 to +20",
    somberUpgrade: "+6 to +8",
    vigorTarget: "40-50",
    summary:
      "Phase 1's last city. Once you have two Great Runes, the Erdtree gate will have you. Learn the ramparts, the inner tree, and Morgott; the rest of the game opens after his fall.",
    approach:
      "From the Outer Wall battleground, beat or bypass the Draconic Tree Sentinel, rest at the Capital Rampart, then follow the avenue to the East Capital Rampart grace. Godfrey's golden shade is the mid-dungeon check; Morgott waits at the Erdtree sanctuary.",
    bosses: [
      {
        name: "Godfrey, First Elden Lord (Golden Shade)",
        note: "A stance-break tutorial in kingly clothes. Jump the stomp, punish the recovery.",
      },
      {
        name: "Morgott, the Omen King",
        note: "True final of Phase 1. Holy damage, delayed slams, and a dagger phase. A +18 / somber +7 weapon and 40 vigor make this a fight instead of a wall.",
      },
    ],
    landmarks: [
      {
        id: "lm-two-runes",
        title: "Offer two Great Runes",
        detail:
          "Godrick and Rennala (or Radahn) satisfy the capital's entry law. Restore them at their Divine Towers before you expect the rune arc bonus.",
      },
      {
        id: "lm-godfrey-shade",
        title: "Defeat Godfrey's shade",
        detail: "Unlocks the inner capital and the path toward the Erdtree sanctuary.",
      },
      {
        id: "lm-bolts",
        title: "Bolt of Gransax",
        detail:
          "Optional legendary armament on the giant spear after Godfrey. Required for a trophy, excellent on quality and dex builds.",
        optional: true,
      },
      {
        id: "lm-morgott",
        title: "Defeat Morgott",
        detail:
          "The Erdtree rejects you anyway; that is the story. Phase 1 ends when you can walk the Forbidden Lands lift, not when the tree opens.",
      },
    ],
    warnings: [
      "The Subterranean Shunning-Grounds under the capital are a late, cruel optional dungeon. They are not the path to Morgott.",
      "After Morgott, the Mountaintops are a new leveling bracket. Do not wander in with a +12 weapon.",
    ],
    accent: "#e8d48b",
  },
];

export function getZone(id: string): Zone | undefined {
  return zones.find((zone) => zone.id === id);
}

export function allLandmarks() {
  return zones.flatMap((zone) =>
    zone.landmarks.map((landmark) => ({ ...landmark, zoneId: zone.id, zoneName: zone.name })),
  );
}
