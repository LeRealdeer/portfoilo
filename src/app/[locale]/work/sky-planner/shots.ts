import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";

import skyHome from "../../../../../public/sky-planner/sky_home.png";
import skyHero from "../../../../../public/sky-planner/sky_hero.png";
import heightExample1 from "../../../../../public/sky-planner/height-example-1.jpg";
import heightExample2 from "../../../../../public/sky-planner/height-example-2.jpg";
import heightExample3 from "../../../../../public/sky-planner/height-example-3.jpg";
import tsArchiveDetail from "../../../../../public/sky-planner/ts-archive-detail.png";
import gaUsersNov from "../../../../../public/sky-planner/ga-users-nov.png";
import survey2 from "../../../../../public/sky-planner/survey-2.png";
import cafeBestTip from "../../../../../public/sky-planner/cafe-best-tip.png";
import openchat from "../../../../../public/sky-planner/openchat.png";
import overseasAdminPermission from "../../../../../public/sky-planner/overseas-admin-permission.png";
import cafeEventFlirting from "../../../../../public/sky-planner/cafe-event-flirting.png";
import cafeEventTreasure from "../../../../../public/sky-planner/cafe-event-treasure.png";
import offlineBooth from "../../../../../public/sky-planner/offline-booth.png";
import offlineFlightResult from "../../../../../public/sky-planner/offline-flight-result.png";
import sheetMusicWorkspace from "../../../../../public/sky-planner/sheet-music-workspace.png";
import heightChecker from "../../../../../public/sky-planner/height-checker.png";
import candleHowto from "../../../../../public/sky-planner/candle-howto.png";
import tsArchive from "../../../../../public/sky-planner/ts-archive.png";
import personalityTest from "../../../../../public/sky-planner/personality-test.png";
import seasonEncyclopedia from "../../../../../public/sky-planner/season-encyclopedia.png";
import twUserReactions from "../../../../../public/sky-planner/tw-user-reactions.jpg";
import twViral1 from "../../../../../public/sky-planner/tw-viral-1.png";
import twViral2 from "../../../../../public/sky-planner/tw-viral-2.png";

/** dimensions come from the imported file, so swapping an image just works */
function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

export const HERO_SHOT = shot(skyHome, 760);

export const SHOTS = {
  use1: shot(heightExample1, 360),
  use2: shot(heightExample2, 360),
  use3: shot(heightExample3, 360),
  evo: shot(skyHero, 480),
  ops: shot(tsArchiveDetail, 480),
  data: shot(gaUsersNov, 500),
  fb: shot(survey2, 500),
  growth1: shot(cafeBestTip, 380),
  growth2: shot(openchat, 380),
  growth3: shot(overseasAdminPermission, 380),
  events1: shot(cafeEventFlirting, 460),
  events2: shot(cafeEventTreasure, 460),
  o2o1: shot(offlineBooth, 460),
  o2o2: shot(offlineFlightResult, 360),
  learn: shot(sheetMusicWorkspace, 460),
} satisfies Record<string, Shot>;

export const FEATURE_SHOTS: Shot[] = [
  shot(heightChecker, 460),
  shot(candleHowto, 460),
  shot(tsArchive, 460),
  shot(personalityTest, 460),
  shot(seasonEncyclopedia, 460),
];

/** personality-test viral spread — shown as an extra gallery under FEATURE 04 */
export const PT_VIRAL: Shot[] = [shot(twUserReactions, 360), shot(twViral1, 360), shot(twViral2, 360)];

/** the three operating-case images in the CaseIntro opener */
export const INTRO_SHOTS: Shot[] = [shot(heightChecker, 460), shot(survey2, 460), shot(cafeEventTreasure, 460)];
