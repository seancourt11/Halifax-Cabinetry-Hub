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
import oakVanityFluted from "@/assets/projects/face-frame/white-oak-face-frame-vanity-fluted-drawers.webp";
import oakVanitySide from "@/assets/projects/face-frame/white-oak-face-frame-vanity-side-slatted-shelf.webp";
import oakKnifeBlock from "@/assets/projects/face-frame/stained-oak-custom-knife-block-shop.webp";
import navyPantryLadder from "@/assets/projects/face-frame/navy-painted-face-frame-pantry-library-ladder.webp";
import navyPantryShelves from "@/assets/projects/face-frame/navy-painted-face-frame-pantry-open-shelves.webp";
import ashCabinet from "@/assets/projects/face-frame/bespoke-ash-face-frame-cabinet-crown-molding-oak-slatted-back.webp";
import shopBuiltins from "@/assets/projects/face-frame/white-face-frame-builtins-fireplace-surround-shop.webp";
import greigeKitchen from "@/assets/projects/face-frame/greige-inset-face-frame-kitchen-mantel-hood.webp";
import raspberryBar from "@/assets/projects/face-frame/raspberry-painted-face-frame-bar-glass-uppers.webp";
import curvedOakBar from "@/assets/projects/face-frame/curved-oak-bar-front-library-shelving-ladder.webp";

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
  {
    job: "Vanities and furniture details",
    photos: [
      project(
        oakVanityFluted,
        "white-oak-face-frame-vanity-fluted-drawers.webp",
        "White oak fluted vanity",
        "White oak face-frame bathroom vanity with fluted drawer and door fronts, polished nickel knobs, a marble top, and a hex mosaic floor",
        1024,
        768,
      ),
      project(
        oakVanitySide,
        "white-oak-face-frame-vanity-side-slatted-shelf.webp",
        "White oak vanity side",
        "White oak face-frame vanity side with a frame-and-panel end and a slatted bottom shelf, on the shop bench",
        1200,
        1600,
      ),
      project(
        oakKnifeBlock,
        "stained-oak-custom-knife-block-shop.webp",
        "Custom stained oak knife block",
        "Custom stained oak knife block with a slatted, rounded-edge design, made in the Hempston Home shop",
        736,
        1600,
      ),
    ],
  },
  {
    job: "Pantries and built-ins",
    photos: [
      project(
        navyPantryLadder,
        "navy-painted-face-frame-pantry-library-ladder.webp",
        "Navy pantry with a library ladder",
        "Navy painted pantry with face-frame lower cabinets, a beadboard wall, and a library ladder",
        1067,
        1600,
      ),
      project(
        navyPantryShelves,
        "navy-painted-face-frame-pantry-open-shelves.webp",
        "Navy pantry corner",
        "Navy painted pantry corner with face-frame lower cabinets and open shelving above",
        1067,
        1600,
      ),
      {
        src: ashCabinet,
        fileName: "bespoke-ash-face-frame-cabinet-crown-molding-oak-slatted-back.webp",
        title: "Bespoke ash cabinet",
        alt: "Bespoke ash face frame cabinet with crown molding and oak slatted back in the Hempston shop",
        caption:
          "A bespoke ash face frame cabinet with crown molding and a weaved oak slatted back, in the shop and to be delivered to site for hand painting.",
        ...projectSize,
        schemaWidth: 1200,
        schemaHeight: 1600,
      },
      project(
        shopBuiltins,
        "white-face-frame-builtins-fireplace-surround-shop.webp",
        "White built-ins and fireplace surround",
        "Two painted white face-frame built-in units and a fireplace surround in the shop",
        1200,
        1600,
      ),
    ],
  },
  {
    job: "Inset kitchen",
    photos: [
      project(
        greigeKitchen,
        "greige-inset-face-frame-kitchen-mantel-hood.webp",
        "Greige inset kitchen",
        "Greige painted inset face-frame kitchen with a mantel-style hood, glass uppers, and a freestanding island with a slatted shelf and baskets",
        1600,
        1067,
      ),
    ],
  },
  {
    job: "Bars and dining storage",
    photos: [
      project(
        raspberryBar,
        "raspberry-painted-face-frame-bar-glass-uppers.webp",
        "Raspberry painted bar",
        "Raspberry painted face-frame cabinet wall with glass upper doors, brass pulls, and floral wallpaper behind the glass",
        1600,
        1067,
      ),
      project(
        curvedOakBar,
        "curved-oak-bar-front-library-shelving-ladder.webp",
        "Curved oak bar",
        "Dark lounge bar with a curved oak bar front, built-in library shelving, and a ladder",
        1600,
        914,
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
