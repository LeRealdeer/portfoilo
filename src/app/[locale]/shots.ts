import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";
import type { ProjectSlug } from "@/data/projects";

import skyplannerHome from "../../../public/main_skyplanner_home.png";
import identity5Home from "../../../public/main_identity5_home.png";
import heartopiaHome from "../../../public/main_heartopia_home.png";

// Selected Work — one image per project subsection (A / B / C)
import skyHeightChecker from "../../../public/sky-planner/height-checker.png";
import skyCafeSurvey from "../../../public/sky-planner/cafe-survey-post.png";
import skyCafeEvent from "../../../public/sky-planner/cafe-event-treasure.png";
import id5CharacterSort from "../../../public/identity5/character-sort.png";
import id5CommentFix from "../../../public/identity5/cp-comment-fix.jpeg";
import id5XPromo from "../../../public/identity5/x-promo.jpeg";
import htCreator from "../../../public/main_heartopia_creator.png";
import htTerms from "../../../public/heartopia/이용약관.png";
import htFavorites from "../../../public/heartopia/favorites.png";

function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

/** the lead screenshot shown under each project title */
export const CARD_SHOTS: Record<ProjectSlug, Shot> = {
  "sky-planner": shot(skyplannerHome, 900),
  "identity5-pick": shot(identity5Home, 820),
  "heartopia-archive": shot(heartopiaHome, 820),
};

/** three shots per project, aligned to the three Selected Work subsections */
export const SECTION_SHOTS: Record<ProjectSlug, Shot[]> = {
  "sky-planner": [shot(skyHeightChecker, 720), shot(skyCafeSurvey, 720), shot(skyCafeEvent, 720)],
  "identity5-pick": [shot(id5CharacterSort, 720), shot(id5CommentFix, 720), shot(id5XPromo, 720)],
  "heartopia-archive": [shot(htCreator, 720), shot(htTerms, 720), shot(htFavorites, 720)],
};
