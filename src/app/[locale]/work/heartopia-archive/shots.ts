import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";

import home from "../../../../../public/heartopia/메인화면.png";
import detail from "../../../../../public/main_heartopia_detail.png";
import cafePosts from "../../../../../public/heartopia/cafe-posts.png";
import archiveGrid from "../../../../../public/heartopia/archive-grid.png";
import termsOfService from "../../../../../public/heartopia/이용약관.png";
import cafeAttribution from "../../../../../public/heartopia/cafe-attribution.png";
import outfitsPopular from "../../../../../public/heartopia/outfits-popular.png";
import photoEditor from "../../../../../public/heartopia/photo-editor.png";

function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

export const HERO_SHOT = shot(home, 760);

export const SHOTS = {
  solution: shot(archiveGrid, 480),
  solutionTerms: shot(termsOfService, 480),
  rightsAttribution: shot(cafeAttribution, 480),
  featOutfit: shot(outfitsPopular, 480),
  featSearch: shot(detail, 480),
  editorAfter: shot(photoEditor, 480),
  ops: shot(cafePosts, 480),
} satisfies Record<string, Shot>;
