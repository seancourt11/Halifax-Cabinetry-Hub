/**
 * Finished-kitchen photos added to the Nova Scotia page.
 * Files are the same assets already shown on /custom-cabinetry-halifax.
 */
import nsHero from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import glenHavenBrass from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import ghWhiteCabinets from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";
import peterLoweIsland from "@/assets/projects/dba-pl-island-kitchen.jpg";
import kentKitchen from "@/assets/projects/dba-kent-kitchen-1.jpg";
import whiteKitchen from "@/assets/projects/md-white-kitchen-brass-pendants.jpg";

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
