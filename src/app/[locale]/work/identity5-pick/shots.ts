import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";

import home from "../../../../../public/identity5/main_identity5_home.png";
import skinCatalog from "../../../../../public/identity5/main_identity5_skin.png";
import tierList from "../../../../../public/identity5/main_identity5_tierlist.png";
import cpChart from "../../../../../public/identity5/main_identity5_cp.png";
import characterSort from "../../../../../public/identity5/character-sort.png";
import skinBoard from "../../../../../public/identity5/skinboard-workspace.png";
import skinChecklist from "../../../../../public/identity5/skin-checklist.png";
import duoMaker from "../../../../../public/identity5/duo-maker.png";
import visualNovel from "../../../../../public/identity5/visual-novel.png";
import skinReviewTool from "../../../../../public/identity5/skin-review-tool.png";
import ga4Pages from "../../../../../public/identity5/ga4-pages.png";
import id5CommentFix from "../../../../../public/identity5/cp-comment-fix.jpeg";
import id5XPromo from "../../../../../public/identity5/x-promo.jpeg";

function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

export const HERO_SHOT = shot(home, 760);
export const QA_SHOT = shot(skinReviewTool, 500);
export const UX_SHOT = shot(ga4Pages, 500);

/** keyed by the feature item's name (same string in both locales) */
export const ITEM_SHOTS: Record<string, Shot> = {
  "Skin Catalog": shot(skinCatalog, 460),
  "Character Sort": shot(characterSort, 460),
  "Tier List": shot(tierList, 460),
  "CP Chart": shot(cpChart, 460),
  "Skin Board": shot(skinBoard, 460),
  "Skin Checklist": shot(skinChecklist, 460),
  "Duo Card": shot(duoMaker, 460),
  "Visual Novel": shot(visualNovel, 460),
};

/** the three operating-case images in the CaseIntro opener */
export const INTRO_SHOTS: Shot[] = [shot(characterSort, 460), shot(id5CommentFix, 460), shot(id5XPromo, 460)];
