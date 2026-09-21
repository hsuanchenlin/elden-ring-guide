import type { ItemAcquisition, ItemMapPin, ZoneId } from "./types";
import { flaskPickups } from "./flasks";
import { starterBuilds } from "./builds";
import { zoneCopyZhTw } from "./zh-tw";

/** Shared blank map slot. Replace `src` per item when a captain screenshot lands. */
export const mapPlaceholder = {
  src: "/maps/blank.svg",
  width: 800,
  height: 450,
} as const;

const pin = (zone: ZoneId, x: number, y: number, certainty: ItemMapPin["certainty"] = "approximate"): ItemMapPin => ({
  zone,
  x,
  y,
  certainty,
});

/**
 * Traditional Chinese acquisition notes for every item already listed in the
 * flask pickup catalogue and the starter-build early-weapon lists.
 * Pins are schematic (percent from west/north) and marked approximate.
 */
export const itemAcquisitions: Record<string, ItemAcquisition> = {
  "seed-keepsake": {
    id: "seed-keepsake",
    nameZhTw: "遺物黃金種子",
    locationZhTw: "角色創建畫面",
    howToGetZhTw:
      "創角時可選黃金種子當遺物。第一次遊玩建議帶它；有了托雷特之後，多一口聖杯瓶通常比開場就裝備緋紅琥珀勳章更有用。",
    alt: "遺物黃金種子的地圖待補。此道具在角色創建畫面取得，沒有野外座標。",
  },
  "seed-stormhill": {
    id: "seed-stormhill",
    nameZhTw: "風暴丘陵幻影小樹",
    locationZhTw: "穿過風暴關卡後、風暴丘陵破屋附近的路旁",
    howToGetZhTw:
      "從關卡前方賜福穿過風暴關卡，沿路上坡。幻影小樹在通往風暴丘陵破屋的路旁，靠近山頂，不必進破屋。",
    pin: pin("limgrave", 42, 22),
    alt: "風暴丘陵黃金種子的地圖待補。示意釘在寧姆格福北部、風暴關卡到破屋的路上。",
  },
  "seed-fort-haight": {
    id: "seed-fort-haight",
    nameZhTw: "海德要塞庭院",
    locationZhTw: "東寧姆格福，海德要塞門口外側",
    howToGetZhTw:
      "從霧林往南騎到海德要塞。種子在要塞南門外側的幻影小樹下。上樓開寶箱可順便拿迪可達斯勳章（左）。",
    pin: pin("limgrave", 82, 52),
    alt: "海德要塞黃金種子的地圖待補。示意釘在寧姆格福東南、要塞門口。",
  },
  "seed-weeping": {
    id: "seed-weeping",
    nameZhTw: "摩恩城接近路",
    locationZhTw: "啜泣半島，通往摩恩城的路上",
    howToGetZhTw:
      "在摩恩城（城牆前方）賜福休息後，沿路繼續往城走。幻影小樹在路旁岩坡上，遠處投石巨人開火之前就能看到。",
    pin: pin("limgrave", 55, 88),
    alt: "摩恩城接近路黃金種子的地圖待補。示意釘在啜泣半島南部大道。",
  },
  "seed-stormveil-cell": {
    id: "seed-stormveil-cell",
    nameZhTw: "史東薇爾深處小房間",
    locationZhTw: "史東薇爾城，深處小房間賜福附近",
    howToGetZhTw:
      "走往葛瑞克的路上，在涅斐麗房間附近的小幻影樹下。進霧門打葛瑞克前先撿，很近。",
    pin: pin("limgrave", 48, 8),
    alt: "史東薇爾深處小房間黃金種子的地圖待補。示意釘在寧姆格福最北的城堡內。",
  },
  "seed-stormveil-spirit": {
    id: "seed-stormveil-spirit",
    nameZhTw: "史東薇爾腐爛樹靈",
    locationZhTw: "史東薇爾城下層庭院",
    howToGetZhTw:
      "從升降機旁房間賜福往外跳到下層，或從裝活壺房間上方的密道下去。擊敗腐爛樹靈後掉落。打不過可以先略過。",
    pin: pin("limgrave", 46, 10),
    alt: "史東薇爾腐爛樹靈黃金種子的地圖待補。示意釘在城堡下層庭院。",
  },
  "seed-gate-town": {
    id: "seed-gate-town",
    nameZhTw: "學院門前鎮",
    locationZhTw: "學院門前鎮水沒遺跡",
    howToGetZhTw:
      "從學院門前鎮賜福走進水沒的鎮區。幻影小樹在廢墟之間，往學院大門的路上就看得到。",
    pin: pin("liurnia", 52, 55),
    alt: "學院門前鎮黃金種子的地圖待補。示意釘在利耶尼亞湖中央的水沒小鎮。",
  },
  "seed-academy-bridge": {
    id: "seed-academy-bridge",
    nameZhTw: "學院正門斷橋",
    locationZhTw: "學院正門口賜福北側斷橋盡頭",
    howToGetZhTw:
      "從南門傳送進學院正門口後，往北走上斷橋，不要往南走進迷宮。種子在斷橋盡頭的幻影小樹下。",
    pin: pin("liurnia", 46, 34),
    alt: "學院正門斷橋黃金種子的地圖待補。示意釘在雷亞盧卡利亞北側斷橋。",
  },
  "seed-raya-courtyard": {
    id: "seed-raya-courtyard",
    nameZhTw: "雷亞盧卡利亞庭院",
    locationZhTw: "擊敗紅狼後的庭院西側",
    howToGetZhTw:
      "討論室賜福出來後不要直衝蕾娜菈。往左前方走到懸崖邊的幻影小樹，種子就在樹下。",
    pin: pin("liurnia", 42, 42),
    alt: "雷亞盧卡利亞庭院黃金種子的地圖待補。示意釘在學院內紅狼之後的庭院西側。",
  },
  "seed-caria": {
    id: "seed-caria",
    nameZhTw: "卡利亞城寨",
    locationZhTw: "城寨上部賜福門外的崖邊",
    howToGetZhTw:
      "清完卡利亞城寨走到城寨上部賜福。出門後在俯瞰庭院的崖邊幻影小樹下。若先走菈妮門廊，這顆可順便拿。",
    pin: pin("liurnia", 22, 16),
    alt: "卡利亞城寨黃金種子的地圖待補。示意釘在利耶尼亞西北城寨上部。",
  },
  "seed-ravine": {
    id: "seed-ravine",
    nameZhTw: "古遺跡斷崖接近路",
    locationZhTw: "隱於谷間的村子西南",
    howToGetZhTw:
      "走谷底密路爬亞壇時，從隱於谷間的村子賜福往西南。幻影小樹在水邊，附近有毒囊。兩邊迪可達斯勳章都有了就可以不繞。",
    pin: pin("liurnia", 38, 22),
    alt: "古遺跡斷崖接近路黃金種子的地圖待補。示意釘在利耶尼亞北谷、村子西南。",
  },
  "seed-redmane-road": {
    id: "seed-redmane-road",
    nameZhTw: "紅獅子城大道",
    locationZhTw: "南蓋利德，通往紅獅子城的路上",
    howToGetZhTw:
      "沿南蓋利德大道往紅獅子城。道路在南方遊商附近分岔後繼續往南，幻影小樹在路旁。祭典前先撿。",
    pin: pin("caelid", 58, 78),
    alt: "紅獅子城大道黃金種子的地圖待補。示意釘在南蓋利德通往城堡的路上。",
  },
  "seed-sellia": {
    id: "seed-sellia",
    nameZhTw: "魔法鎮瑟利亞",
    locationZhTw: "解開結界後的鎮內北側",
    howToGetZhTw:
      "點亮鎮外三座燈塔讓結界落下，再進鎮內北側的幻影小樹下撿種子。",
    pin: pin("caelid", 72, 44),
    alt: "瑟利亞黃金種子的地圖待補。示意釘在蓋利德東側魔法鎮北側。",
  },
  "seed-highway": {
    id: "seed-highway",
    nameZhTw: "亞壇大道岔路",
    locationZhTw: "亞壇大道岔路賜福旁邊",
    howToGetZhTw:
      "從迪可達斯大升降機出來，沿大道走到岔路賜福。幻影小樹就在路邊，幾乎不會錯過。",
    pin: pin("altus", 48, 70),
    alt: "亞壇大道岔路黃金種子的地圖待補。示意釘在高原南緣大道岔路。",
  },
  "seed-gazing-hill": {
    id: "seed-gazing-hill",
    nameZhTw: "眺望黃金樹的山丘",
    locationZhTw: "眺望黃金樹的山丘賜福附近",
    howToGetZhTw:
      "從大道岔路往西騎到眺望黃金樹的山丘。幻影小樹在賜福附近、盧克斯廢墟北側的坡上。",
    pin: pin("altus", 32, 60),
    alt: "眺望黃金樹的山丘黃金種子的地圖待補。示意釘在亞壇西部山丘。",
  },
  "seed-phantom-tree": {
    id: "seed-phantom-tree",
    nameZhTw: "外牆幻影樹",
    locationZhTw: "王城外牆，外牆幻影樹賜福",
    howToGetZhTw:
      "王城外牆這棵幻影樹一次掉兩顆黃金種子。進羅德爾前最划算的聖杯瓶跳升，賜福就在樹旁。",
    pin: pin("altus", 82, 38),
    alt: "外牆幻影樹黃金種子的地圖待補。示意釘在亞壇東緣、王城外牆。",
  },
  "seed-leyndell-spirit": {
    id: "seed-leyndell-spirit",
    nameZhTw: "王城腐爛樹靈",
    locationZhTw: "下層空地，大道露臺北側",
    howToGetZhTw:
      "從大道露臺賜福下樓出門後立刻右轉，跑到走道盡頭翻欄杆落到灰地（不要掉進下水道）。往開闊空地走，腐爛樹靈會鑽出來；擊敗後掉落種子。",
    pin: pin("leyndell", 48, 52),
    alt: "王城腐爛樹靈黃金種子的地圖待補。示意釘在羅德爾下層、大道露臺北側空地。",
  },
  "tear-third-church": {
    id: "tear-third-church",
    nameZhTw: "瑪莉卡第三教堂",
    locationZhTw: "東寧姆格福，霧林北側",
    howToGetZhTw:
      "多數路線的第一滴露滴，在教堂祭壇雕像前。教堂北側草叢裡有傳送門通往龍墓的野獸神殿；沒打算去就不要踩。",
    pin: pin("limgrave", 78, 32),
    alt: "瑪莉卡第三教堂聖杯露滴的地圖待補。示意釘在東寧姆格福、霧林北側教堂。",
  },
  "tear-callu": {
    id: "tear-callu",
    nameZhTw: "卡爾洗禮教堂",
    locationZhTw: "啜泣半島中央林地，病村南側",
    howToGetZhTw:
      "從摩恩城（城牆前方）往西上坡，經過病村就到教堂。外面有癲火村民，裡面是老鼠；露滴在盡頭雕像前，可以衝進去撿就走。",
    pin: pin("limgrave", 48, 80),
    alt: "卡爾洗禮教堂聖杯露滴的地圖待補。示意釘在啜泣半島中央林地。",
  },
  "tear-pilgrimage": {
    id: "tear-pilgrimage",
    nameZhTw: "巡禮教堂",
    locationZhTw: "啜泣半島北岸高崖",
    howToGetZhTw:
      "半島北岸高處的開放教堂。附近有亞人，教堂裡沒有強敵。露滴在祭壇雕像前。",
    pin: pin("limgrave", 58, 70),
    alt: "巡禮教堂聖杯露滴的地圖待補。示意釘在啜泣半島北岸高崖。",
  },
  "tear-fourth-church": {
    id: "tear-fourth-church",
    nameZhTw: "瑪莉卡第四教堂",
    locationZhTw: "啜泣半島西岸，封印魔女的廢墟旁",
    howToGetZhTw:
      "從巡禮教堂往西南沿海走。教堂外有士兵看守，進去祭壇就能拿露滴。這是半島三滴露滴迴路的最後一站。",
    pin: pin("limgrave", 28, 78),
    alt: "瑪莉卡第四教堂聖杯露滴的地圖待補。示意釘在啜泣半島西岸。",
  },
  "tear-irith": {
    id: "tear-irith",
    nameZhTw: "伊利斯教堂",
    locationZhTw: "傍湖斷崖，出史東薇爾後立刻可見",
    howToGetZhTw:
      "擊敗葛瑞克走出城堡，在傍湖斷崖賜福旁就能看見這座教堂。露滴在祭壇；教堂裡還有托普斯在賣基礎輝石魔法。",
    pin: pin("liurnia", 72, 88),
    alt: "伊利斯教堂聖杯露滴的地圖待補。示意釘在利耶尼亞東南、城堡出口旁。",
  },
  "tear-bellum": {
    id: "tear-bellum",
    nameZhTw: "彼魯姆教堂",
    locationZhTw: "彼魯姆大道，接近迪可達斯大升降機",
    howToGetZhTw:
      "走東岸高地往升降機時會經過。公路上有癲火敵人，騎過去即可。露滴在教堂雕像前的花叢裡。",
    pin: pin("liurnia", 70, 28),
    alt: "彼魯姆教堂聖杯露滴的地圖待補。示意釘在利耶尼亞東北大道。",
  },
  "tear-inhibition": {
    id: "tear-inhibition",
    nameZhTw: "鎮靜教堂",
    locationZhTw: "利耶尼亞東北，癲火村上方",
    howToGetZhTw:
      "從癲火村再往上爬到山頂廢教堂。沿路會堆癲火，附近有癲火燈塔。進門先碰賜福；祭壇有露滴與指頭女巫屍體，隨後會被維克入侵。拿了就走。",
    pin: pin("liurnia", 78, 16),
    alt: "鎮靜教堂聖杯露滴的地圖待補。示意釘在利耶尼亞東北癲火村上方。",
  },
  "tear-plague": {
    id: "tear-plague",
    nameZhTw: "腐敗病教堂",
    locationZhTw: "瑟利亞鎮上方山丘",
    howToGetZhTw:
      "從瑟利亞往上爬就到。米莉森稍後會在這裡休息，但露滴一上山就能拿，在祭壇雕像前。",
    pin: pin("caelid", 74, 36),
    alt: "腐敗病教堂聖杯露滴的地圖待補。示意釘在蓋利德瑟利亞上方山丘。",
  },
  "tear-second-church": {
    id: "tear-second-church",
    nameZhTw: "瑪莉卡第二教堂",
    locationZhTw: "亞壇高原西側",
    howToGetZhTw:
      "從大道往西騎。教堂常有入侵者，露滴仍在祭壇，跟決鬥無關。",
    pin: pin("altus", 22, 52),
    alt: "瑪莉卡第二教堂聖杯露滴的地圖待補。示意釘在亞壇高原西側。",
  },
  "tear-stormcaller": {
    id: "tear-stormcaller",
    nameZhTw: "喚雷教堂",
    locationZhTw: "東亞壇，通往王城的雷電平原",
    howToGetZhTw:
      "外牆大道東側的古龍信仰地帶。短程繞路就能到教堂，露滴在祭壇。",
    pin: pin("altus", 76, 48),
    alt: "喚雷教堂聖杯露滴的地圖待補。示意釘在亞壇東部雷電平原。",
  },
  "weapon-lordsworns-greatsword": {
    id: "weapon-lordsworns-greatsword",
    nameZhTw: "君王軍大劍",
    locationZhTw: "關卡前方廢墟的馬車寶箱",
    howToGetZhTw:
      "關卡前方廢墟北側馬車後面的寶箱。同一片廢墟還有寧姆格福西地圖碑與地下室的砥石小刀。",
    pin: pin("limgrave", 38, 38),
    alt: "君王軍大劍的地圖待補。示意釘在寧姆格福關卡前方廢墟。",
  },
  "weapon-bloodhounds-fang": {
    id: "weapon-bloodhounds-fang",
    nameZhTw: "獵犬長牙",
    locationZhTw: "無主獵犬的封印監牢",
    howToGetZhTw:
      "寧姆格福南部、亞基爾湖附近的封印監牢。擊敗獵犬騎士達瑞威爾後掉落。失色武器，需力氣 18、靈巧 17。",
    pin: pin("limgrave", 48, 58),
    alt: "獵犬長牙的地圖待補。示意釘在寧姆格福南部封印監牢。",
  },
  "weapon-claymore": {
    id: "weapon-claymore",
    nameZhTw: "大劍",
    locationZhTw: "啜泣半島摩恩城",
    howToGetZhTw:
      "摩恩城內搭升降機上樓，從帶翼混種那一區跳到上層平台，寶箱裡就是大劍。半島迴路時順便拿。",
    pin: pin("limgrave", 52, 96),
    alt: "大劍的地圖待補。示意釘在啜泣半島南端摩恩城。",
  },
  "weapon-greatsword": {
    id: "weapon-greatsword",
    nameZhTw: "巨劍",
    locationZhTw: "北蓋利德大道上被狗看守的馬車",
    howToGetZhTw:
      "蓋利德與龍墓交界的大道，腐敗旁露台附近。兩隻大狗守著廢棄馬車，寶箱裡是巨劍。",
    pin: pin("caelid", 48, 18),
    alt: "巨劍的地圖待補。示意釘在北蓋利德與龍墓交界的馬車。",
  },
  "weapon-uchigatana": {
    id: "weapon-uchigatana",
    nameZhTw: "打刀",
    locationZhTw: "武士初始武器；第二把在穿刺地下墓地",
    howToGetZhTw:
      "武士開場就有一把。第二把在寧姆格福北部聖橋西側崖壁的穿刺地下墓地，走側道到高台，屍體上可撿，不必先打首領。",
    pin: pin("limgrave", 50, 18),
    alt: "打刀的地圖待補。示意釘在寧姆格福北部穿刺地下墓地。",
  },
  "ash-bloody-slash": {
    id: "ash-bloody-slash",
    nameZhTw: "戰灰：鮮血斬擊",
    locationZhTw: "海德要塞城牆上的騎士",
    howToGetZhTw:
      "清海德要塞時，擊敗城牆上的神授騎士後掉落。要塞門口同時有黃金種子。",
    pin: pin("limgrave", 82, 50),
    alt: "戰灰：鮮血斬擊的地圖待補。示意釘在寧姆格福東南海德要塞。",
  },
  "weapon-reduvia": {
    id: "weapon-reduvia",
    nameZhTw: "逆刺",
    locationZhTw: "蒙水地，血指涅利烏斯入侵",
    howToGetZhTw:
      "沿寧姆格福中央河谷的蒙水地走，會被血指涅利烏斯入侵。擊敗後掉落逆刺；血指獵人尤拉稍後會來幫忙。",
    pin: pin("limgrave", 50, 30),
    alt: "逆刺的地圖待補。示意釘在寧姆格福中央蒙水地河谷。",
  },
  "weapon-meteorite-staff": {
    id: "weapon-meteorite-staff",
    nameZhTw: "隕石杖",
    locationZhTw: "蓋利德沼澤的賢者之街遺跡",
    howToGetZhTw:
      "瑟利亞西側腐敗沼澤裡的賢者之街遺跡，屍體上可撿。需智力 18。智力 S 補正，但無法強化。寧姆格福站穩後再來，不要等級 12 就硬闖。",
    pin: pin("caelid", 58, 48),
    alt: "隕石杖的地圖待補。示意釘在蓋利德沼澤賢者之街遺跡。",
  },
  "spell-rock-sling": {
    id: "spell-rock-sling",
    nameZhTw: "岩石球",
    locationZhTw: "賢者之街遺跡地下室寶箱",
    howToGetZhTw:
      "同一片賢者之街遺跡的地下室寶箱。重力傷害、削韌高，配隕石杖是第一階段合法的首領手段。",
    pin: pin("caelid", 58, 50),
    alt: "岩石球的地圖待補。示意釘在蓋利德賢者之街遺跡地下室。",
  },
  "spell-carian-slicer": {
    id: "spell-carian-slicer",
    nameZhTw: "卡利亞迅劍",
    locationZhTw: "把王室卷軸交給瑟濂或米利耶後購買",
    howToGetZhTw:
      "王室卷軸在亞基爾湖南方賜福東側高台廢墟，東邊那座廢墟頂上的屍體，旁邊有貴族魔法師。交給驛站街遺跡地下室的瑟濂，或奇蹟教堂的牧師米利耶，再花 1500 盧恩買卡利亞迅劍。",
    pin: pin("limgrave", 58, 52),
    alt: "卡利亞迅劍的地圖待補。示意釘在寧姆格福亞基爾湖南側、王室卷軸廢墟。",
  },
  "item-spirit-calling-bell": {
    id: "item-spirit-calling-bell",
    nameZhTw: "召魂鈴與離群野狼的骨灰",
    locationZhTw: "艾蕾教堂夜晚，魔女蕾娜",
    howToGetZhTw:
      "取得托雷特之後，夜晚到艾蕾教堂找蕾娜，她會給召魂鈴與離群野狼的骨灰。錯過的話，圓桌廳堂的孿生老嫗會賣召魂鈴。",
    pin: pin("limgrave", 28, 42),
    alt: "召魂鈴與離群野狼的骨灰的地圖待補。示意釘在寧姆格福艾蕾教堂。",
  },
};

/** Exact `earlyWeapons[].name` values from builds.ts → catalogue ids. */
export const earlyWeaponIdsByName: Record<string, string> = {
  "Lordsworn's Greatsword": "weapon-lordsworns-greatsword",
  "Bloodhound's Fang": "weapon-bloodhounds-fang",
  Claymore: "weapon-claymore",
  Greatsword: "weapon-greatsword",
  Uchigatana: "weapon-uchigatana",
  "Bloody Slash (Ash of War)": "ash-bloody-slash",
  Reduvia: "weapon-reduvia",
  "Meteorite Staff": "weapon-meteorite-staff",
  "Rock Sling": "spell-rock-sling",
  "Carian Slicer": "spell-carian-slicer",
  "Spirit Calling Bell + Lone Wolf Ashes": "item-spirit-calling-bell",
};

export function acquisitionFor(id: string): ItemAcquisition {
  const item = itemAcquisitions[id];
  if (!item) {
    throw new Error(`Missing Traditional Chinese acquisition for catalogue item "${id}"`);
  }
  return item;
}

export function earlyWeaponIdFor(name: string): string {
  const id = earlyWeaponIdsByName[name];
  if (!id) {
    throw new Error(`No catalogue id for early weapon "${name}"`);
  }
  return id;
}

export function catalogueItemIds(): string[] {
  const flaskIds = flaskPickups.map((pickup) => pickup.id);
  const weaponIds = [
    ...new Set(starterBuilds.flatMap((build) => build.earlyWeapons.map((weapon) => earlyWeaponIdFor(weapon.name)))),
  ];
  return [...flaskIds, ...weaponIds];
}

export function mapCaption(item: ItemAcquisition): string {
  if (!item.pin) return "無野外座標 · 地圖畫面待補";
  const zone = zoneCopyZhTw[item.pin.zone].name;
  const certainty = item.pin.certainty === "confirmed" ? "確認" : "約略";
  return `${zone}示意位置（${certainty}）· 地圖畫面待補`;
}

export function mapFigure(item: ItemAcquisition) {
  return {
    src: mapPlaceholder.src,
    width: mapPlaceholder.width,
    height: mapPlaceholder.height,
    alt: item.alt,
    pin: item.pin ? { x: item.pin.x, y: item.pin.y, label: zoneCopyZhTw[item.pin.zone].name } : undefined,
    caption: mapCaption(item),
  };
}
