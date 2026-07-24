// Hempston product catalog data — shared across the products pages and the
// interactive door visualizer. Swatch hex values are content data (not theme
// tokens) and are applied via inline styles on swatch/door previews only.

export type DoorStyleId =
  | "shaker"
  | "slim-shaker"
  | "slab"
  | "raised-panel"
  | "recessed-panel"
  | "beaded"
  | "reeded";

export type DoorStyle = {
  id: DoorStyleId;
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
};

export const doorStyles: DoorStyle[] = [
  {
    id: "shaker",
    name: "Shaker",
    tagline: "The timeless five-piece classic",
    description:
      "A flat recessed centre panel framed by clean, square rails and stiles. The most versatile cabinet door style — at home in traditional, transitional, and modern kitchens alike.",
    bestFor: "Transitional and farmhouse kitchens",
  },
  {
    id: "slim-shaker",
    name: "Slim Shaker",
    tagline: "A pared-back, contemporary frame",
    description:
      "A narrower rail-and-stile profile that keeps the Shaker character while reading lighter and more modern. Pairs beautifully with handleless or edge-pull hardware.",
    bestFor: "Modern and minimalist designs",
  },
  {
    id: "slab",
    name: "Slab",
    tagline: "Flat-panel, grain-forward minimalism",
    description:
      "A single smooth surface that lets wood grain or paint do the talking. Ideal for European-style frameless cabinetry and seamless, full-height runs.",
    bestFor: "Contemporary and frameless layouts",
  },
  {
    id: "raised-panel",
    name: "Raised Panel",
    tagline: "Traditional depth and detail",
    description:
      "A profiled centre panel that sits proud of the frame with a sculpted bevel, casting subtle shadow lines for a richer, more formal look.",
    bestFor: "Classic and heritage interiors",
  },
  {
    id: "recessed-panel",
    name: "Recessed Panel",
    tagline: "Soft, layered shadow lines",
    description:
      "A centre panel set below the frame with a delicate cove or step profile — more detail than a Shaker, more restraint than a raised panel.",
    bestFor: "Refined transitional spaces",
  },
  {
    id: "beaded",
    name: "Beaded Inset",
    tagline: "Fine detail for inset cabinetry",
    description:
      "A crisp bead runs the inside edge of the frame, a hallmark of fine furniture and a natural companion to inset face-frame construction.",
    bestFor: "Heritage and English-country kitchens",
  },
  {
    id: "reeded",
    name: "Reeded / Fluted",
    tagline: "Tactile vertical texture",
    description:
      "Repeating half-round reeds run vertically across the face, adding rhythm and a tactile, architectural quality to islands, hoods, and feature cabinetry.",
    bestFor: "Feature islands and statement millwork",
  },
];

export type Finish = {
  id: string;
  name: string;
  hex: string;
  note: string;
  image?: string;
};

// Painted door renders — used as the swatches on the Colours & Finishes page
// so the customer sees the finish on an actual cabinet door.
import schoolHouseWhiteDoor from "@/assets/door-gallery-2026/inset_malibu_school_house_white.png";
import settingPlasterDoor from "@/assets/door-gallery-2026/11_setting_plaster_shaker.png";
import phantomMistDoor from "@/assets/door-gallery-2026/door_barcelona_phantom_mist.png";
import mulberryDoor from "@/assets/door-gallery-2026/09_mulberry_shaker.png";
import charlestonGreenDoor from "@/assets/door-gallery-2026/door_3_P-405-06_charleston_green.png";
import studioGreenDoor from "@/assets/door-gallery-2026/10_studio_green_slab.png";
import hagueBlueDoor from "@/assets/door-gallery-2026/12_hague_blue_slab.png";
import cambridgeNavyDoor from "@/assets/door-gallery-2026/08_cambridge_navy_shaker.png";
import lostSoulsDoor from "@/assets/door-gallery-2026/door_athena_lost_souls.png";
import blackMagicDoor from "@/assets/door-gallery-2026/door_genoa_black_magic.png";

// Stained white oak / walnut door renders for the stain swatches.
import smokedOakDoor from "@/assets/door-gallery-2026/06_smoked_oak_slab.png";
import ebonyOakDoor from "@/assets/door-gallery-2026/05_ebony_oak_slab.png";
import ebonyWalnutDoor from "@/assets/door-gallery-2026/02_ebony_walnut_slab.png";

// Hempston paint palette — matched to the painted door finishes shown in our
// featured door gallery, drawing on Farrow & Ball and Tonester Paints references.
// Note: Tracadie and Vieux-Port Plaster on inset face frames are showcased
// in the dedicated "Neutrals on an inset face frame" highlight block below the
// paint grid, so they are not duplicated here.
export const paintColors: Finish[] = [
  { id: "decorators-white", name: "Noto White", hex: "#F7F5F0", note: "Crisp warm white on painted cabinetry" },
  { id: "natural-linen", name: "Cefalù Linen", hex: "#E8E0D5", note: "Soft warm neutral with a hint of cream" },
  { id: "setting-plaster", name: "Vieux-Port Plaster", hex: "#E6C6B5", note: "Soft warm blush on a painted shaker", image: settingPlasterDoor },
  { id: "phantom-mist", name: "Cassis Mist", hex: "#B7B3A8", note: "Cool muted greige", image: phantomMistDoor },
  { id: "mulberry", name: "Exmoor Berry", hex: "#6E3B4A", note: "Deep heritage burgundy", image: mulberryDoor },
  { id: "charleston-green", name: "El Hierro Green", hex: "#25302B", note: "Blackened forest green", image: charlestonGreenDoor },
  { id: "studio-green", name: "Salcombe Green", hex: "#2E362E", note: "Deep muted forest", image: studioGreenDoor },
  { id: "hague-blue", name: "Aeolian Blue", hex: "#333F48", note: "Dark inky blue", image: hagueBlueDoor },
  { id: "cambridge-navy", name: "La Palma Navy", hex: "#1F2A3A", note: "Deep classic navy", image: cambridgeNavyDoor },
  { id: "lost-souls", name: "Dartmoor Soul", hex: "#1E2320", note: "Moody green-black", image: lostSoulsDoor },
  { id: "black-magic", name: "Palermo Noir", hex: "#141311", note: "Warm true black", image: blackMagicDoor },
];

// Hempston hardwax-oil stain range — shown on the actual stained white oak /
// walnut door renders, inspired by Rubio Monocoat single-coat hardwax oils.
export const woodStains: Finish[] = [
  { id: "smoked-oak", name: "Etna Oak", hex: "#7A6A58", note: "Warm greyed brown on white oak", image: smokedOakDoor },
  { id: "ebony-oak", name: "Lanzarote Oak", hex: "#1F1C19", note: "Near-black smoked white oak", image: ebonyOakDoor },
  { id: "ebony-walnut", name: "Tenerife Walnut", hex: "#2E241D", note: "Blackened walnut stain", image: ebonyWalnutDoor },
];

export type WoodSpecies = {
  id: string;
  name: string;
  category: "Solid Wood" | "Engineered";
  hex: string;
  grain: string;
  character: string;
  bestFor: string;
};

export const woodSpecies: WoodSpecies[] = [
  {
    id: "white-oak",
    name: "White Oak",
    category: "Solid Wood",
    hex: "#C9A874",
    grain: "Straight, open grain",
    character:
      "Hard, durable, and beautifully receptive to both natural oils and reactive stains. The defining timber of contemporary cabinetry.",
    bestFor: "Modern slab and reeded doors",
  },
  {
    id: "walnut",
    name: "American Walnut",
    category: "Solid Wood",
    hex: "#5A4332",
    grain: "Rich, flowing grain",
    character:
      "A luxurious chocolate-brown hardwood with depth and warmth. Best showcased with a clear oil that lets its natural colour shine.",
    bestFor: "Feature islands and statement runs",
  },
  {
    id: "hard-maple",
    name: "Hard Maple",
    category: "Solid Wood",
    hex: "#E4D2AE",
    grain: "Fine, tight grain",
    character:
      "A smooth, pale, close-grained hardwood that takes paint exceptionally well — the go-to for crisp painted Shaker doors.",
    bestFor: "Painted Shaker and inset doors",
  },
  {
    id: "cherry",
    name: "Cherry",
    category: "Solid Wood",
    hex: "#9E5A3C",
    grain: "Smooth, satiny grain",
    character:
      "A warm reddish-brown that deepens gracefully with age and light. A classic choice for heritage and traditional kitchens.",
    bestFor: "Raised-panel traditional cabinetry",
  },
  {
    id: "ash",
    name: "White Ash",
    category: "Solid Wood",
    hex: "#D9C4A0",
    grain: "Bold, pronounced grain",
    character:
      "Light in tone with dramatic open grain similar to oak, offering excellent strength and a striking textured look.",
    bestFor: "Grain-forward stained doors",
  },
  {
    id: "rift-oak",
    name: "Rift-Cut Oak",
    category: "Solid Wood",
    hex: "#C2A87E",
    grain: "Linear, cathedral-free",
    character:
      "Oak sawn for long, consistent vertical lines and no cathedral figure — the refined choice for full-height modern slabs.",
    bestFor: "Tall, seamless slab doors",
  },
  {
    id: "painted-mdf",
    name: "Painted MDF",
    category: "Engineered",
    hex: "#ECE7DB",
    grain: "Smooth, grainless",
    character:
      "A dense, stable engineered panel with no grain telegraphing — delivering the flattest, most uniform painted finish possible.",
    bestFor: "Flawless painted Shaker and slab doors",
  },
  {
    id: "rift-veneer",
    name: "Rift Oak Veneer",
    category: "Engineered",
    hex: "#CBB089",
    grain: "Continuous, book-matched",
    character:
      "Real wood veneer over a stable core, allowing dramatic continuous grain across large doors and panels without movement.",
    bestFor: "Sequenced grain on tall cabinetry",
  },
  {
    id: "woodgrain-laminate",
    name: "Woodgrain Laminate",
    category: "Engineered",
    hex: "#B9A484",
    grain: "Textured synchronized",
    character:
      "A hard-wearing, scratch- and moisture-resistant surface with synchronized texture that mirrors real grain — ideal for high-traffic homes.",
    bestFor: "Durable, low-maintenance kitchens",
  },
];

export type CabinetStyle = {
  id: string;
  name: string;
  reveal: string;
  description: string;
  pros: string[];
  bestFor: string;
  thumbnail: string;
};

export const cabinetStyles: CabinetStyle[] = [
  {
    id: "frameless",
    name: "Frameless (Euro)",
    reveal: "No face frame at all",
    description:
      "Doors mount directly to the cabinet box with no face frame, for full-access interiors and a clean, uninterrupted European look.",
    pros: [
      "Maximum interior storage",
      "Fully accessible openings",
      "Seamless, frame-free face",
    ],
    bestFor: "Modern, storage-driven kitchens",
    thumbnail: hagueBlueDoor,
  },
  {
    id: "inset",
    name: "Inset Face Frame",
    reveal: "Doors flush inside the frame",
    description:
      "Doors and drawer fronts are set flush within the face frame, fitted to exacting tolerances. The hallmark of fine furniture-grade cabinetry.",
    pros: [
      "Furniture-quality craftsmanship",
      "Crisp, precise shadow lines",
      "Timeless heritage character",
    ],
    bestFor: "Heritage homes and high-end builds",
    thumbnail: schoolHouseWhiteDoor,
  },
];
