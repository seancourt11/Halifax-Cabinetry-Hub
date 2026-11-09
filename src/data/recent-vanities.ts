/**
 * Recent vanity photos for /products/vanities.
 * Files live in public/images/vanities/recent and are served as-is.
 * Do not import them through src/assets: the image plugin would recompress them.
 * Width, height, alt text and captions come from the supplied manifest.
 * Captions are sentence case. Status words stay as the manifest wrote them.
 */

export type RecentVanityPhoto = {
  file: string;
  src: string;
  alt: string;
  name: string;
  caption: string;
  width: number;
  height: number;
  bytes: number;
};

export const RECENT_VANITY_TITLE = "In the shop and recent vanities";
export const RECENT_VANITY_INTRO =
  "A few vanities we built recently, and some in progress in our Halifax shop.";

const DIR = "/images/vanities/recent";

const photos: Omit<RecentVanityPhoto, "src">[] = [
  {
    file: "lilac-framed-double-vanity-black-marble-top.webp",
    alt: "Lilac framed double vanity with glass knobs and a black marble countertop",
    name: "Lilac framed double vanity",
    caption: "Lilac framed double vanity, installed",
    width: 1600,
    height: 1600,
    bytes: 141884,
  },
  {
    file: "blue-painted-triple-sink-kids-vanity.webp",
    alt: "Blue painted triple-sink vanity with animal-shaped mirrors",
    name: "Blue painted triple-sink kids vanity",
    caption: "Blue painted triple-sink kids vanity, installed",
    width: 1600,
    height: 1600,
    bytes: 214832,
  },
  {
    file: "natural-maple-six-drawer-double-vanity.webp",
    alt: "Natural maple six-drawer double vanity with round knobs and a white countertop",
    name: "Natural maple six-drawer double vanity",
    caption: "Natural maple six-drawer double vanity, installed",
    width: 1280,
    height: 852,
    bytes: 62950,
  },
  {
    file: "white-oak-reeded-vanity-marble-top.webp",
    alt: "White oak reeded vanity with inset doors, drawers and a marble countertop",
    name: "White oak reeded vanity",
    caption: "White oak reeded vanity, installed",
    width: 1024,
    height: 768,
    bytes: 143508,
  },
  {
    file: "dark-stained-oak-curved-vanity-marble-top.webp",
    alt: "Dark stained oak vanity with a curved side, three drawers and a marble countertop",
    name: "Dark stained oak curved vanity",
    caption: "Dark stained oak curved vanity, installed",
    width: 1600,
    height: 1200,
    bytes: 151060,
  },
  {
    file: "oak-multi-drawer-vanity-marble-top.webp",
    alt: "Oak multi-drawer double vanity with brass knobs and a marble countertop",
    name: "Oak multi-drawer vanity",
    caption: "Oak multi-drawer vanity, installed",
    width: 848,
    height: 480,
    bytes: 41466,
  },
  {
    file: "lilac-reeded-vanity-black-marble-top.webp",
    alt: "Lilac reeded vanity with glass knobs, brass tap and a black marble countertop",
    name: "Lilac reeded vanity",
    caption: "Lilac reeded vanity, installed",
    width: 1600,
    height: 1600,
    bytes: 174130,
  },
  {
    file: "blue-stained-ash-vanity-drawers-chrome-pulls.webp",
    alt: "Blue stained ash vanity drawers with chrome pulls and visible wood grain",
    name: "Blue stained ash vanity drawers",
    caption: "Blue stained ash vanity drawers, installed",
    width: 1200,
    height: 1600,
    bytes: 76924,
  },
  {
    file: "white-oak-framed-panel-vanity-detail.webp",
    alt: "White oak vanity detail showing framed door and drawer panels under a white countertop",
    name: "White oak framed panel vanity detail",
    caption: "White oak framed panel vanity detail, installed",
    width: 1200,
    height: 1600,
    bytes: 182198,
  },
  {
    file: "floating-live-edge-wood-vanity-two-drawers.webp",
    alt: "Floating live-edge wood vanity with two drawers and a thick wood countertop",
    name: "Floating live-edge wood vanity",
    caption: "Floating live-edge wood vanity, installed",
    width: 1600,
    height: 1200,
    bytes: 147646,
  },
  {
    file: "white-oak-vanity-side-slatted-shelf-in-shop.webp",
    alt: "White oak vanity side panel and slatted lower shelf on a workshop bench",
    name: "White oak vanity side with slatted shelf",
    caption: "White oak vanity side with slatted shelf, in the shop",
    width: 1200,
    height: 1600,
    bytes: 219824,
  },
  {
    file: "dovetail-drawer-box-in-shop.webp",
    alt: "Wood drawer box with exposed dovetail joinery on a workshop bench",
    name: "Dovetail drawer box",
    caption: "Dovetail drawer box, in the shop",
    width: 1200,
    height: 1600,
    bytes: 166734,
  },
];

export const recentVanities: RecentVanityPhoto[] = photos.map((photo) => ({
  ...photo,
  src: `${DIR}/${photo.file}`,
}));

/** Inputs for imageObjectGraph. Description is the manifest alt text. */
export function recentVanityImageObjects(siteUrl: string) {
  return recentVanities.map((photo) => ({
    url: `${siteUrl}${photo.src}`,
    name: photo.name,
    caption: photo.caption,
    description: photo.alt,
    width: photo.width,
    height: photo.height,
  }));
}
