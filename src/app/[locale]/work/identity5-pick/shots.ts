import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";

import home from "../../../../../public/identity5/main_identity5_home.png";
import skinCatalog from "../../../../../public/identity5/main_identity5_skin.png";
import tierList from "../../../../../public/identity5/main_identity5_tierlist.png";
import cpChart from "../../../../../public/identity5/main_identity5_cp.png";
import characterSort from "../../../../../public/identity5/character-sort.png";
import skinBoard from "../../../../../public/identity5/skinboard-workspace.png";
import skinBoardSkins from "../../../../../public/identity5/skinboard-skins.png";
import skinChecklist from "../../../../../public/identity5/skin-checklist.png";
import duoMaker from "../../../../../public/identity5/duo-maker.png";
import duoResult from "../../../../../public/identity5/duo-result.png";
import visualNovel from "../../../../../public/identity5/visual-novel.png";
import skinReviewTool from "../../../../../public/identity5/skin-review-tool.png";
import ga4Pages from "../../../../../public/identity5/ga4-pages.png";

function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

export const HERO_SHOT = shot(home, 1180);
export const VN_SHOT = shot(visualNovel, 520);
export const QA_SHOT = shot(skinReviewTool, 900);
export const UX_SHOT = shot(ga4Pages, 900);

/** keyed by the feature item's name (same string in both locales) */
export const ITEM_SHOTS: Record<string, Shot[]> = {
  "Skin Catalog": [shot(skinCatalog, 520)],
  "Character Sort": [shot(characterSort, 520)],
  "Tier List": [shot(tierList, 520)],
  "CP Chart": [shot(cpChart, 520)],
  "Skin Board": [shot(skinBoard, 520), shot(skinBoardSkins, 520)],
  "Skin Checklist": [shot(skinChecklist, 520)],
  "Duo Card": [shot(duoMaker, 520), shot(duoResult, 300)],
};
