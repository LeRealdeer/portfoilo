import type { StaticImageData } from "next/image";
import type { Shot } from "@/components/Placeholder";

import skyplannerHome from "../../../public/main_skyplanner_home.png";
import identity5Home from "../../../public/main_identity5_home.png";
import identity5Cp from "../../../public/main_identity5_cp.png";
import identity5Skin from "../../../public/main_identity5_skin.png";
import identity5Tierlist from "../../../public/main_identity5_tierlist.png";
import heartopiaHome from "../../../public/main_heartopia_home.png";
import heartopiaCreator from "../../../public/main_heartopia_creator.png";
import heartopiaDetail from "../../../public/main_heartopia_detail.png";

function shot(img: StaticImageData, mw?: number): Shot {
  return { src: img.src, w: img.width, h: img.height, mw };
}

export const CARD_SHOTS = {
  sky: shot(skyplannerHome, 900),
  identity5: {
    main: shot(identity5Home, 760),
    thumbs: [
      { label: "CP MAP", ...shot(identity5Cp, 260) },
      { label: "SKIN ARCHIVE", ...shot(identity5Skin, 260) },
      { label: "TIER LIST", ...shot(identity5Tierlist, 260) },
    ],
  },
  heartopia: {
    main: shot(heartopiaHome, 760),
    thumbs: [
      { label: "CREATOR PAGE", ...shot(heartopiaCreator, 380) },
      { label: "CONTENT DETAIL", ...shot(heartopiaDetail, 380) },
    ],
  },
};
