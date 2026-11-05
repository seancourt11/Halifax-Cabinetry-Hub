/**
 * Photos added to the Nova Scotia and inset face-frame pages.
 * Project files are the same assets already shown on /custom-cabinetry-halifax.
 * Profile files are existing door-profile renders and the inset doors already
 * named on /products/cabinet-styles. Nothing here is a new upload.
 */
import nsHero from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import glenHavenBrass from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import ghWhiteCabinets from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";
import peterLoweIsland from "@/assets/projects/dba-pl-island-kitchen.jpg";
import kentKitchen from "@/assets/projects/dba-kent-kitchen-1.jpg";
import kentCoffee from "@/assets/projects/dba-kent-kitchen-2.jpg";
import whiteKitchen from "@/assets/projects/md-white-kitchen-brass-pendants.jpg";
import farmhouseSink from "@/assets/projects/farmhouse-sink-blue-tile.jpg";
import laundry from "@/assets/projects/md-laundry-cabinetry.jpg";

import beadedProfile from "@/assets/door-profiles/beaded.png";
import shakerProfile from "@/assets/door-profiles/shaker.png";
import raisedPanelProfile from "@/assets/door-profiles/raised-panel.png";
import recessedPanelProfile from "@/assets/door-profiles/recessed-panel.png";

import notoDoor from "@/assets/door-gallery-2026/inset_malibu_setting_plaster.png";
import tracadieDoor from "@/assets/door-gallery-2026/inset_malibu_school_house_white.png";
import torquayDoor from "@/assets/door-gallery-2026/inset_malibu_hague_blue.png";
import laGomeraDoor from "@/assets/door-gallery-2026/inset_malibu_charleston_green.png";

export type SeoImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  /** Display size, matching the existing gallery pattern. */
  width: number;
  height: number;
  /** Pixel size of the image file the site serves (max width 1600). */
  schemaWidth: number;
  schemaHeight: number;
  /** Halifax card or product label this file already uses. Not shown on the new pages. */
  sourceLabel: string;
};

const projectSize = { width: 1200, height: 900 };
const doorSize = { width: 600, height: 800 };

export const novaScotiaHero: SeoImage = {
  src: nsHero,
  alt: "Painted custom kitchen cabinets with a white oak island",
  title: "Painted custom kitchen cabinets with a white oak island",
  caption: "Painted custom kitchen cabinets with a white oak island",
  width: 1600,
  height: 1000,
  schemaWidth: 1280,
  schemaHeight: 1436,
  sourceLabel: "Existing hero. Halifax card: Painted & Stained Oak Island",
};

/** Finished kitchens from the Halifax page. The existing hero is not repeated. */
export const novaScotiaProjectPhotos: SeoImage[] = [
  {
    src: glenHavenBrass,
    alt: "Finished kitchen with white painted cabinets, a brass range hood, marble counters, and a stained wood island",
    title: "White painted kitchen",
    caption:
      "Finished kitchen with white painted cabinets, a brass range hood, marble counters, and a stained wood island.",
    ...projectSize,
    schemaWidth: 1600,
    schemaHeight: 1200,
    sourceLabel: "White + Oak Island Kitchen (glen-haven-brass-hood-kitchen.jpg)",
  },
  {
    src: ghWhiteCabinets,
    alt: "White painted shaker kitchen cabinets with brass knobs, a brass range hood, and a marble backsplash",
    title: "White shaker kitchen",
    caption:
      "White painted shaker kitchen cabinets with brass knobs, a brass range hood, and a marble backsplash.",
    ...projectSize,
    schemaWidth: 1280,
    schemaHeight: 1597,
    sourceLabel: "Painted Shaker Kitchen (gh-white-cabinets-brass-hood.jpg)",
  },
  {
    src: peterLoweIsland,
    alt: "Painted kitchen with a dark stained island, light wood ceiling beams, and a brick backsplash",
    title: "Painted kitchen with a dark island",
    caption:
      "Painted kitchen with a dark stained island, light wood ceiling beams, and a brick backsplash.",
    ...projectSize,
    schemaWidth: 1600,
    schemaHeight: 1066,
    sourceLabel: "Dark Oak Island Kitchen (dba-pl-island-kitchen.jpg)",
  },
  {
    src: kentKitchen,
    alt: "Painted kitchen cabinets with a light wood island, exposed ceiling beams, and a corner window",
    title: "Painted kitchen with a wood island",
    caption:
      "Painted kitchen cabinets with a light wood island, exposed ceiling beams, and a corner window.",
    ...projectSize,
    schemaWidth: 1600,
    schemaHeight: 1066,
    sourceLabel: "Inset Oak Island Kitchen (dba-kent-kitchen-1.jpg)",
  },
  {
    src: whiteKitchen,
    alt: "White painted kitchen cabinets with a marble backsplash, a brass faucet, and a light wood island",
    title: "White painted kitchen with brass pendants",
    caption:
      "White painted kitchen cabinets with a marble backsplash, a brass faucet, and a light wood island.",
    ...projectSize,
    schemaWidth: 1068,
    schemaHeight: 1600,
    sourceLabel: "White Panelled Kitchen (md-white-kitchen-brass-pendants.jpg)",
  },
];

export const insetHero: SeoImage = {
  src: tracadieDoor,
  alt: "Inset raised-panel cabinet door set flush in a face frame",
  title: "Inset raised-panel cabinet door set flush in a face frame",
  caption: "Inset raised-panel cabinet door set flush in a face frame",
  width: 1600,
  height: 2000,
  schemaWidth: 1024,
  schemaHeight: 1024,
  sourceLabel:
    "Existing hero. Cabinet styles door: Tracadie, Inset Raised Panel, School House White",
};

/**
 * Face-frame door profile illustrations. Names match doorStyles in finishes.ts
 * (Beaded Inset, Shaker, Raised Panel, Recessed Panel). Files stay as they are
 * so other references are not broken.
 */
export const insetProfileIllustrations: SeoImage[] = [
  {
    src: beadedProfile,
    alt: "Beaded inset cabinet door profile with a bead along the inside edge of the frame",
    title: "Beaded Inset",
    caption: "Beaded inset cabinet door profile with a bead along the inside edge of the frame.",
    ...doorSize,
    schemaWidth: 1086,
    schemaHeight: 1448,
    sourceLabel: "door-profiles/beaded.png. Door style name: Beaded Inset",
  },
  {
    src: shakerProfile,
    alt: "Shaker cabinet door profile with a flat recessed centre panel and square rails and stiles",
    title: "Shaker",
    caption:
      "Shaker cabinet door profile with a flat recessed centre panel and square rails and stiles.",
    ...doorSize,
    schemaWidth: 1086,
    schemaHeight: 1448,
    sourceLabel: "door-profiles/shaker.png. Door style name: Shaker",
  },
  {
    src: raisedPanelProfile,
    alt: "Raised panel cabinet door profile with a centre panel proud of the frame",
    title: "Raised Panel",
    caption: "Raised panel cabinet door profile with a centre panel proud of the frame.",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1536,
    sourceLabel: "door-profiles/raised-panel.png. Door style name: Raised Panel",
  },
  {
    src: recessedPanelProfile,
    alt: "Recessed panel cabinet door profile with a centre panel set below the frame",
    title: "Recessed Panel",
    caption: "Recessed panel cabinet door profile with a centre panel set below the frame.",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1536,
    sourceLabel: "door-profiles/recessed-panel.png. Door style name: Recessed Panel",
  },
];

/** Inset raised-panel doors already captioned on /products/cabinet-styles. */
export const insetNamedDoors: SeoImage[] = [
  {
    src: notoDoor,
    alt: "Noto inset raised panel cabinet door in Setting Plaster",
    title: "Noto",
    caption: "Inset Raised Panel in Setting Plaster.",
    ...doorSize,
    schemaWidth: 1254,
    schemaHeight: 1254,
    sourceLabel: "Cabinet styles gallery: Noto, Inset Raised Panel, Setting Plaster",
  },
  {
    src: tracadieDoor,
    alt: "Tracadie inset raised panel cabinet door in School House White",
    title: "Tracadie",
    caption: "Inset Raised Panel in School House White.",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1024,
    sourceLabel: "Cabinet styles gallery: Tracadie, Inset Raised Panel, School House White",
  },
  {
    src: torquayDoor,
    alt: "Torquay inset raised panel cabinet door in Hague Blue",
    title: "Torquay",
    caption: "Inset Raised Panel in Hague Blue.",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1024,
    sourceLabel: "Cabinet styles gallery: Torquay, Inset Raised Panel, Hague Blue",
  },
  {
    src: laGomeraDoor,
    alt: "La Gomera inset raised panel cabinet door in Charleston Green",
    title: "La Gomera",
    caption: "Inset Raised Panel in Charleston Green.",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1024,
    sourceLabel: "Cabinet styles gallery: La Gomera, Inset Raised Panel, Charleston Green",
  },
];

/**
 * Halifax photos whose existing alts already call the cabinetry inset.
 * Fewer than six, so nothing that is only shaker or overlay is labeled inset.
 */
export const insetProjectPhotos: SeoImage[] = [
  {
    src: kentKitchen,
    alt: "Painted inset kitchen cabinets with a light wood island, exposed ceiling beams, and a corner window",
    title: "Painted inset kitchen",
    caption:
      "Painted inset kitchen cabinets with a light wood island, exposed ceiling beams, and a corner window.",
    ...projectSize,
    schemaWidth: 1600,
    schemaHeight: 1066,
    sourceLabel: "Inset Oak Island Kitchen (dba-kent-kitchen-1.jpg)",
  },
  {
    src: kentCoffee,
    alt: "Painted inset cabinet doors beside an open coffee station, with drawers below and wood ceiling beams",
    title: "Inset cabinet coffee station",
    caption:
      "Painted inset cabinet doors beside an open coffee station, with drawers below and wood ceiling beams.",
    ...projectSize,
    schemaWidth: 1600,
    schemaHeight: 1066,
    sourceLabel: "Hidden Coffee Station (dba-kent-kitchen-2.jpg)",
  },
  {
    src: farmhouseSink,
    alt: "White inset shaker cabinets with a farmhouse sink, marble counters, and a blue patterned tile backsplash",
    title: "White inset shaker cabinets",
    caption:
      "White inset shaker cabinets with a farmhouse sink, marble counters, and a blue patterned tile backsplash.",
    ...projectSize,
    schemaWidth: 1282,
    schemaHeight: 1920,
    sourceLabel: "White Inset Kitchen (farmhouse-sink-blue-tile.jpg)",
  },
  {
    src: laundry,
    alt: "Laundry room with painted inset upper cabinets, brass hardware, and full-height closet doors",
    title: "Inset laundry cabinets",
    caption:
      "Laundry room with painted inset upper cabinets, brass hardware, and full-height closet doors.",
    ...projectSize,
    schemaWidth: 1068,
    schemaHeight: 1600,
    sourceLabel: "Inset Laundry Cabinetry (md-laundry-cabinetry.jpg)",
  },
];

export function uniqueImages(items: SeoImage[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}

export function imageObjectInputs(items: SeoImage[], siteUrl: string) {
  return uniqueImages(items).map((item) => ({
    url: `${siteUrl}${item.src}`,
    caption: item.caption,
    name: item.title,
    width: item.schemaWidth,
    height: item.schemaHeight,
  }));
}
