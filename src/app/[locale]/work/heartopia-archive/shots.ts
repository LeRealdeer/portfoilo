import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";

import home from "../../../../../public/main_heartopia_home.png";
import detail from "../../../../../public/main_heartopia_detail.png";
import cafePosts from "../../../../../public/heartopia/cafe-posts.png";
import archiveGrid from "../../../../../public/heartopia/archive-grid.png";
import favorites from "../../../../../public/heartopia/favorites.png";
import cafeAttribution from "../../../../../public/heartopia/cafe-attribution.png";
import outfitsPopular from "../../../../../public/heartopia/outfits-popular.png";
import photoEditor from "../../../../../public/heartopia/photo-editor.png";

function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

export const HERO_SHOT = shot(home, 1180);

export const SHOTS = {
  solution: shot(archiveGrid, 620),
  solutionFavorites: shot(favorites, 620),
  rightsAttribution: shot(cafeAttribution, 480),
  featOutfit: shot(outfitsPopular, 820),
  featSearch: shot(detail, 900),
  editorAfter: shot(photoEditor, 640),
  ops: shot(cafePosts, 720),
} satisfies Record<string, Shot>;
