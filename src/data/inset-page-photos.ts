/**
 * Face-frame photos and named door samples for /inset-face-frame-cabinets.
 * Names and finishes are the ones already used in src/data/door-gallery-2026.ts.
 */
import glenHavenBrass from "@/assets/projects/glen-haven-brass-hood-kitchen.jpg";
import ghWhiteCabinets from "@/assets/projects/gh-white-cabinets-brass-hood.jpg";
import ghOakIsland from "@/assets/projects/gh-oak-island-painted-beams.jpg";
import ghButler from "@/assets/projects/gh-butler-pantry-glass.jpg";
import ghGalley from "@/assets/projects/gallery/gh-31westgate-IndianRd-1695-f2-paintedbeams-1.jpg";
import ghOakUppers from "@/assets/projects/gallery/gh-31westgate-IndianRd-17260-f.jpg";
import ghFromLiving from "@/assets/projects/gallery/gh-31westgate-IndianRd-1776-fv2-paintedbeams.jpg";
import kentCoffee from "@/assets/projects/dba-kent-kitchen-2.jpg";
import farmhouseSink from "@/assets/projects/farmhouse-sink-blue-tile.jpg";
import kentPantry from "@/assets/projects/dba-kent-pantry.jpg";
import plKitchen from "@/assets/projects/dba-pl-kitchen-1.jpg";

import noto from "@/assets/door-gallery-2026/inset_malibu_setting_plaster.png";
import tracadie from "@/assets/door-gallery-2026/inset_malibu_school_house_white.png";
import torquay from "@/assets/door-gallery-2026/inset_malibu_hague_blue.png";
import laGomera from "@/assets/door-gallery-2026/inset_malibu_charleston_green.png";
import dartmoor from "@/assets/door-gallery-2026/door_athena_lost_souls.png";
import cassis from "@/assets/door-gallery-2026/door_barcelona_phantom_mist.png";
import vieuxPort from "@/assets/door-gallery-2026/11_setting_plaster_shaker.png";
import exmoor from "@/assets/door-gallery-2026/09_mulberry_shaker.png";
import palermo from "@/assets/door-gallery-2026/door_genoa_black_magic.png";
import marseille from "@/assets/door-gallery-2026/01_driftwood_walnut_shaker.png";
import cefalu from "@/assets/door-gallery-2026/04_cerused_oak_shaker.png";
import etna from "@/assets/door-gallery-2026/06_smoked_oak_slab.png";

import heroImg from "@/assets/door-gallery-2026/inset_malibu_school_house_white.png";

export type InsetPhoto = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  schemaWidth: number;
  schemaHeight: number;
  fileName: string;
};

const projectSize = { width: 1200, height: 900 };
const doorSize = { width: 600, height: 800 };

function project(
  src: string,
  fileName: string,
  title: string,
  alt: string,
  schemaWidth: number,
  schemaHeight: number,
): InsetPhoto {
  return {
    src,
    fileName,
    title,
    alt,
    caption: alt.endsWith(".") ? alt : `${alt}.`,
    ...projectSize,
    schemaWidth,
    schemaHeight,
  };
}

export const glenHavenPhotos: InsetPhoto[] = [
  project(
    glenHavenBrass,
    "glen-haven-brass-hood-kitchen.jpg",
    "White face-frame kitchen",
    "White painted face-frame cabinets around a brass range hood, with a marble island in front",
    1600,
    1200,
  ),
  project(
    ghWhiteCabinets,
    "gh-white-cabinets-brass-hood.jpg",
    "Range wall",
    "White face-frame doors and drawers beside a brass hood and a marble backsplash",
    1280,
    1597,
  ),
  project(
    ghOakIsland,
    "gh-oak-island-painted-beams.jpg",
    "Island view",
    "White face-frame perimeter cabinets and a stained wood island with inset panels",
    1280,
    1436,
  ),
  project(
    ghButler,
    "gh-butler-pantry-glass.jpg",
    "Pantry",
    "Glass and solid doors set flush in a white face frame, above solid lower doors",
    1527,
    1280,
  ),
  project(
    ghGalley,
    "gh-31westgate-IndianRd-1695-f2-paintedbeams-1.jpg",
    "Down the kitchen",
    "A long run of white face-frame cabinets and a stained wood island",
    1280,
    1650,
  ),
  project(
    ghOakUppers,
    "gh-31westgate-IndianRd-17260-f.jpg",
    "Stained wood uppers",
    "Stained wood face-frame upper and lower doors with a narrow reveal around each door",
    1280,
    1640,
  ),
  project(
    ghFromLiving,
    "gh-31westgate-IndianRd-1776-fv2-paintedbeams.jpg",
    "From the living room",
    "White face-frame cabinets and a stained wood island seen past the island seating",
    1280,
    1513,
  ),
];

export const otherFaceFrameJobs: { job: string; photos: InsetPhoto[] }[] = [
  {
    job: "Coffee station",
    photos: [
      project(
        kentCoffee,
        "dba-kent-kitchen-2.jpg",
        "Inset cabinet coffee station",
        "Painted face-frame doors beside an open coffee station, with drawers below",
        1600,
        1066,
      ),
    ],
  },
  {
    job: "Farmhouse sink",
    photos: [
      project(
        farmhouseSink,
        "farmhouse-sink-blue-tile.jpg",
        "White inset farmhouse sink",
        "White face-frame doors around a farmhouse sink, with a marble counter and blue tile",
        1282,
        1920,
      ),
    ],
  },
  {
    job: "Pantry and mudroom",
    photos: [
      project(
        kentPantry,
        "dba-kent-pantry.jpg",
        "Mudroom face-frame cabinets",
        "Painted face-frame doors and a drawer around a built-in bench",
        1600,
        1066,
      ),
    ],
  },
  {
    job: "Cream inset kitchen",
    photos: [
      project(
        plKitchen,
        "dba-pl-kitchen-1.jpg",
        "Cream inset drawers",
        "Cream face-frame drawers and doors around a dark island and a brick backsplash",
        1600,
        1066,
      ),
    ],
  },
];

/** Captions use the door name, profile, and finish already published in the door gallery. */
export const doorSamples: InsetPhoto[] = [
  {
    src: noto,
    fileName: "inset_malibu_setting_plaster.png",
    title: "Noto",
    caption: "Inset Raised Panel, Setting Plaster",
    alt: "Noto inset raised panel door and drawer sitting flush in a face frame, in Setting Plaster",
    ...doorSize,
    schemaWidth: 1254,
    schemaHeight: 1254,
  },
  {
    src: tracadie,
    fileName: "inset_malibu_school_house_white.png",
    title: "Tracadie",
    caption: "Inset Raised Panel, School House White",
    alt: "Tracadie inset raised panel door and drawer sitting flush in a face frame, in School House White",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1024,
  },
  {
    src: torquay,
    fileName: "inset_malibu_hague_blue.png",
    title: "Torquay",
    caption: "Inset Raised Panel, Hague Blue",
    alt: "Torquay inset raised panel door and drawer sitting flush in a face frame, in Hague Blue",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1024,
  },
  {
    src: laGomera,
    fileName: "inset_malibu_charleston_green.png",
    title: "La Gomera",
    caption: "Inset Raised Panel, Charleston Green",
    alt: "La Gomera inset raised panel door and drawer sitting flush in a face frame, in Charleston Green",
    ...doorSize,
    schemaWidth: 1024,
    schemaHeight: 1024,
  },
  {
    src: dartmoor,
    fileName: "door_athena_lost_souls.png",
    title: "Dartmoor",
    caption: "Beaded Inset, Lost Souls",
    alt: "Dartmoor beaded inset door in Lost Souls",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: cassis,
    fileName: "door_barcelona_phantom_mist.png",
    title: "Cassis",
    caption: "Raised Panel, Phantom Mist",
    alt: "Cassis raised panel door in Phantom Mist",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: vieuxPort,
    fileName: "11_setting_plaster_shaker.png",
    title: "Vieux-Port",
    caption: "Painted Shaker, Setting Plaster",
    alt: "Vieux-Port painted shaker door in Setting Plaster",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: exmoor,
    fileName: "09_mulberry_shaker.png",
    title: "Exmoor",
    caption: "Painted Shaker, Mulberry",
    alt: "Exmoor painted shaker door in Mulberry",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: palermo,
    fileName: "door_genoa_black_magic.png",
    title: "Palermo",
    caption: "Slim Shaker, Black Magic",
    alt: "Palermo slim shaker door in Black Magic",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: marseille,
    fileName: "01_driftwood_walnut_shaker.png",
    title: "Marseille",
    caption: "Walnut Shaker, Driftwood",
    alt: "Marseille walnut shaker door in a Driftwood finish",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: cefalu,
    fileName: "04_cerused_oak_shaker.png",
    title: "Cefalù",
    caption: "Cerused Washed Oak, White Oak",
    alt: "Cefalù cerused washed oak shaker door",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
  {
    src: etna,
    fileName: "06_smoked_oak_slab.png",
    title: "Etna",
    caption: "White Oak Slab, Smoked Oak",
    alt: "Etna white oak slab door in Smoked Oak",
    ...doorSize,
    schemaWidth: 1037,
    schemaHeight: 1517,
  },
];

export const insetHeroImage: InsetPhoto = {
  src: heroImg,
  fileName: "inset_malibu_school_house_white.png",
  title: "Inset raised-panel cabinet door set flush in a face frame",
  caption: "Inset raised-panel cabinet door set flush in a face frame",
  alt: "Inset raised-panel cabinet door set flush in a face frame",
  width: 1600,
  height: 2000,
  schemaWidth: 1024,
  schemaHeight: 1024,
};

export const insetPagePhotos: InsetPhoto[] = [
  insetHeroImage,
  ...glenHavenPhotos,
  ...otherFaceFrameJobs.flatMap((group) => group.photos),
  ...doorSamples,
];

export function uniqueInsetPhotos(items: InsetPhoto[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });
}
