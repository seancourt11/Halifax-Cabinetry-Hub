/**
 * Public image file names. The served name is `{slug}-{800|1600}.{avif|webp}`.
 * The slug comes from the source path, not from mtime or a content hash, so a
 * pipeline change keeps the same URL.
 */

const SLUG_OVERRIDES: Record<string, string> = {
  "og/og-about.jpg": "hempston-about-custom-cabinetry-share-image",
  "og/og-home.jpg": "hempston-home-custom-kitchen-share-image",
  "og/og-contact.jpg": "hempston-contact-custom-cabinetry-share-image",
  "og/og-brands.jpg": "hempston-cabinet-hardware-brands-share-image",
  "og/og-services.jpg": "hempston-kitchen-design-services-share-image",
  "og/og-case-studies.jpg": "hempston-kitchen-case-studies-share-image",
  "og/og-colours-finishes.jpg": "hempston-cabinet-paint-colours-finishes-share-image",
  "halifax-city.jpg": "halifax-nova-scotia-waterfront",
  "products-hero.jpg": "cabinet-door-finish-sample-wall",
  "hempston-bar-detail.jpg": "hempston-bar-cabinetry-detail",
  "hempston-bar-lounge.jpg": "hempston-bar-lounge-cabinetry",
  "hempston-built-in.jpg": "hempston-built-in-cabinetry",
  "hempston-curve-template.jpg": "hempston-cabinet-curve-template",
  "hempston-kitchen.jpg": "hempston-custom-kitchen-cabinetry",
  "hempston-kitchen-2.jpg": "hempston-custom-kitchen-cabinetry-second-view",
  "hempston-kitchen-3.jpg": "hempston-custom-kitchen-cabinetry-third-view",
  "hempston-kitchen-4.jpg": "hempston-custom-kitchen-cabinetry-fourth-view",

  "projects/gh-oak-island-painted-beams.jpg":
    "glen-haven-oak-island-painted-beam-kitchen-cabinetry",
  "projects/moncton-built-ins-fireplace-wall.jpg":
    "dieppe-painted-shaker-built-ins-fireplace-surround",
  "projects/modern-marble-kitchen.jpg": "light-oak-kitchen-marble-island-cabinetry",
  "projects/md-laundry-cabinetry.jpg": "modern-drift-painted-shaker-laundry-cabinetry",
  "projects/grey-oak-bar-pantry.jpg": "grey-oak-bar-and-pantry-cabinetry",
  "projects/dba-kent-kitchen-1.jpg": "house-on-kent-inset-white-oak-island-kitchen",
  "projects/dba-kent-kitchen-2.jpg": "house-on-kent-inset-kitchen-hemlock-beams",
  "projects/dba-kent-pantry.jpg": "house-on-kent-painted-entry-built-in-cabinetry",
  "projects/dba-pl-kitchen-1.jpg": "house-on-peter-lowe-timber-ceiling-kitchen",
  "projects/dba-pl-kitchen-2.jpg": "house-on-peter-lowe-sage-mudroom-cabinetry",
  "projects/dba-pl-island-kitchen.jpg": "house-on-peter-lowe-dark-oak-island-kitchen",
  "projects/crombie-warm-oak-stairwell.jpg": "warm-oak-stair-millwork-and-framed-mirror",

  "door-gallery-2026/01_driftwood_walnut_shaker.png":
    "marseille-driftwood-walnut-shaker-cabinet-door",
  "door-gallery-2026/02_ebony_walnut_slab.png": "tenerife-ebony-walnut-slab-cabinet-door",
  "door-gallery-2026/03_antique_walnut_shaker.png": "devon-antique-walnut-shaker-cabinet-door",
  "door-gallery-2026/04_cerused_oak_shaker.png": "cefalu-cerused-washed-oak-shaker-cabinet-door",
  "door-gallery-2026/05_ebony_oak_slab.png": "lanzarote-ebony-oak-slab-cabinet-door",
  "door-gallery-2026/06_smoked_oak_slab.png": "etna-smoked-oak-slab-cabinet-door",
  "door-gallery-2026/08_cambridge_navy_shaker.png": "la-palma-cambridge-navy-shaker-cabinet-door",
  "door-gallery-2026/09_mulberry_shaker.png": "exmoor-mulberry-painted-shaker-cabinet-door",
  "door-gallery-2026/10_studio_green_slab.png": "salcombe-studio-green-slab-cabinet-door",
  "door-gallery-2026/11_setting_plaster_shaker.png":
    "vieux-port-setting-plaster-shaker-cabinet-door",
  "door-gallery-2026/12_hague_blue_slab.png": "aeolian-hague-blue-painted-slab-cabinet-door",
  "door-gallery-2026/door_3_P-405-06_charleston_green.png":
    "el-hierro-charleston-green-recessed-panel-cabinet-door",
  "door-gallery-2026/door_athena_lost_souls.png": "dartmoor-lost-souls-beaded-inset-cabinet-door",
  "door-gallery-2026/door_barcelona_phantom_mist.png":
    "cassis-phantom-mist-raised-panel-cabinet-door",
  "door-gallery-2026/door_genoa_black_magic.png": "palermo-black-magic-slim-shaker-cabinet-door",
  "door-gallery-2026/inset_malibu_setting_plaster.png":
    "noto-inset-raised-panel-setting-plaster-cabinet-door",
  "door-gallery-2026/inset_malibu_school_house_white.png":
    "tracadie-inset-raised-panel-school-house-white-cabinet-door",
  "door-gallery-2026/inset_malibu_hague_blue.png":
    "torquay-inset-raised-panel-hague-blue-cabinet-door",
  "door-gallery-2026/inset_malibu_charleston_green.png":
    "la-gomera-inset-raised-panel-charleston-green-cabinet-door",

  "materials/detail_09_herringbone_melilla.png": "herringbone-melilla-tile-material-sample",
  "materials/detail_10_wideplank_jetblack.png": "wide-plank-jet-black-white-oak-material-sample",
  "materials/detail_11_soapstone_edge.png": "soapstone-edge-material-sample",
  "materials/detail_12_zellige_paprika.png": "zellige-paprika-tile-material-sample",
  "materials/detail_13_calacatta_viola_bookmatch.png":
    "calacatta-viola-bookmatch-stone-material-sample",
  "materials/detail_14_tumbled_limestone.png": "tumbled-limestone-material-sample",
  "materials/detail_15_verde_alpi.png": "verde-alpi-stone-material-sample",

  "projects/gallery/gh-31westgate-IndianRd-1683-fc.jpg":
    "glen-haven-gallery-painted-cabinetry-stained-oak-island",
  "projects/gallery/gh-31westgate-IndianRd-1695-f2-paintedbeams-1.jpg":
    "glen-haven-painted-ceiling-beams-over-kitchen",
  "projects/gallery/gh-31westgate-IndianRd-1711-f-v2-no-beams.jpg":
    "glen-haven-great-room-and-custom-kitchen",
  "projects/gallery/gh-31westgate-IndianRd-17260-f.jpg":
    "glen-haven-range-hood-marble-backsplash-detail",
  "projects/gallery/gh-31westgate-IndianRd-1761-f-paintedbeams.jpg":
    "glen-haven-island-seating-brass-pendants",
  "projects/gallery/gh-31westgate-IndianRd-1776-fv2-paintedbeams.jpg":
    "glen-haven-painted-beam-ceiling-cased-openings",
  "projects/gallery/gh-31westgate-IndianRd-1798-f.jpg":
    "glen-haven-gallery-butler-pantry-glass-uppers",
  "projects/gallery/gh-31westgate-IndianRd-1819-f3-paintedbeams.jpg":
    "glen-haven-coastal-light-millwork-detail",
  "projects/gallery/gh-31westgate-IndianRd-1839-f.jpg":
    "glen-haven-living-area-beyond-custom-kitchen",
  "projects/gallery/crombie-1.jpg": "crombie-house-kitchen-panelled-cabinetry",
  "projects/gallery/crombie-2.jpg": "crombie-house-warm-oak-stair-millwork",
  "projects/gallery/crombie-3.jpg": "crombie-house-painted-cabinetry-brass-hardware",
  "projects/gallery/crombie-4.jpg": "crombie-house-pantry-prep-zone",
  "projects/gallery/crombie-5.jpg": "crombie-house-reeded-oak-vanity",
  "projects/gallery/crombie-6.jpg": "crombie-house-marble-waterfall-island",
  "projects/gallery/crombie-7.jpg": "crombie-house-dining-millwork",
  "projects/gallery/crombie-8.jpg": "crombie-house-range-hood-cabinetry-surround",
  "projects/gallery/crombie-9.jpg": "crombie-house-integrated-appliance-panels",
  "projects/gallery/crombie-10.jpg": "crombie-house-lighting-over-island",
  "projects/gallery/crombie-11.jpg": "crombie-house-interior-finishing-detail",
  "projects/gallery/keep-01.jpg": "modern-drift-gallery-white-kitchen-brass-pendants",
  "projects/gallery/keep-02.jpg": "modern-drift-island-seating-integrated-appliance-panels",
  "projects/gallery/keep-03.jpg": "modern-drift-custom-range-hood-millwork",
  "projects/gallery/keep-04.jpg": "modern-drift-prep-zone-marble-countertop",
  "projects/gallery/keep-05.jpg": "modern-drift-butler-pantry-cabinetry",
  "projects/gallery/keep-06.jpg": "modern-drift-laundry-room-cabinetry",
  "projects/gallery/keep-07.jpg": "modern-drift-gallery-oak-double-vanity",
  "projects/gallery/keep-08.jpg": "modern-drift-dining-mirrored-millwork",
  "projects/gallery/keep-09.jpg": "modern-drift-painted-cabinetry-hardware-detail",
  "projects/gallery/keep-10.jpg": "modern-drift-natural-light-over-island",
  "projects/gallery/keep-11.jpg": "modern-drift-cabinetry-to-ceiling-crown",
  "projects/gallery/keep-12.jpg": "modern-drift-integrated-fridge-panels",
  "projects/gallery/keep-13.jpg": "modern-drift-powder-room-cabinetry",
  "projects/gallery/keep-14.jpg": "modern-drift-living-area-beyond-kitchen",
  "projects/gallery/keep-15.jpg": "modern-drift-cabinetry-hardware-closeup",
  "projects/gallery/keep-16.jpg": "modern-drift-coffee-station-millwork",
  "projects/gallery/keep-17.jpg": "modern-drift-primary-bath-vanity",
  "projects/gallery/keep-18.jpg": "modern-drift-bedroom-built-in-cabinetry",
  "projects/gallery/keep-19.jpg": "modern-drift-mudroom-cabinetry-bench",
  "projects/gallery/keep-20.jpg": "modern-drift-kitchen-wide-view",
  "projects/gallery/keep-21.jpg": "modern-drift-exterior-evening-view",
  "projects/gallery/nwc-CANDREWS-1.jpg": "northwest-cove-gallery-oak-island-kitchen",
  "projects/gallery/nwc-CANDREWS-2.jpg": "northwest-cove-gallery-white-cabinetry-brass-hood",
  "projects/gallery/nwc-CANDREWS-3.jpg": "northwest-cove-gallery-navy-tile-backsplash",
  "projects/gallery/nwc-CANDREWS-4.jpg": "northwest-cove-island-seating-coastal-light",
  "projects/gallery/nwc-CANDREWS-5.jpg": "northwest-cove-gallery-integrated-appliance-panels",
  "projects/gallery/nwc-CANDREWS-7.jpg": "northwest-cove-prep-zone-marble-counter",
  "projects/gallery/nwc-CANDREWS-8.jpg": "northwest-cove-cabinetry-to-ceiling",
  "projects/gallery/nwc-CANDREWS-8-2.jpg": "northwest-cove-kitchen-wide-view",
};

const SUBJECT =
  /(kitchen|cabinetr|cabinet|door|oak|vanity|halifax|millwork|pantry|laundry|stone|walnut|shaker|inset|painted|fireplace|built-in|dieppe|waterfront|workshop|dovetail|material|sample|share|stair|hood|island|beam|tile|sink|brass|navy|plaster|profile|glen-haven|northwest-cove|modern-drift|house-on|crombie|mirror|marble|finish|mudroom|hempston)/;

export function hasExplicitSlug(relativePath: string) {
  return Object.prototype.hasOwnProperty.call(SLUG_OVERRIDES, assetKey(relativePath));
}

export function assetKey(relativePath: string) {
  return relativePath.replaceAll("\\", "/").replace(/^\//, "");
}

export function assetSlug(relativePath: string) {
  const key = assetKey(relativePath);
  const override = SLUG_OVERRIDES[key];
  if (override) return override;
  return fallbackSlug(key);
}

function fallbackSlug(key: string) {
  const file = key.split("/").pop() ?? key;
  let base = file.replace(/\.(png|jpe?g|webp|avif)$/i, "");
  base = base.replace(/^\d+_/, "");
  base = base.replace(/_/g, "-").toLowerCase();
  base = base.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (key.startsWith("projects/") && !key.startsWith("projects/gallery/")) {
    base = base
      .replace(/^gh-/, "glen-haven-")
      .replace(/^nwc-/, "northwest-cove-")
      .replace(/^md-/, "modern-drift-")
      .replace(/^dba-kent-/, "house-on-kent-")
      .replace(/^dba-pl-/, "house-on-peter-lowe-");
  }
  if (key.startsWith("og/")) base = `${base.replace(/^og-/, "hempston-")}-share-image`;
  if (key.startsWith("door-profiles/")) base = `${base}-cabinet-door-profile`;
  if (key.startsWith("door-gallery-2026/")) base = `${base}-cabinet-door`;
  if (key.startsWith("materials/")) base = `${base.replace(/^detail-\d+-/, "")}-material-sample`;
  return base;
}

export function isDescriptiveSlug(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return false;
  if (/^[0-9a-f]{8,}$/.test(slug)) return false;
  if (/(^|-)(keep|candrews|indianrd|img|dsc|photo)(-|$)|p-405|(^|-)image-\d+/.test(slug))
    return false;
  if (slug.split("-").length < 2) return false;
  return SUBJECT.test(slug);
}

export function derivativeFileName(slug: string, width: 800 | 1600, ext: "avif" | "webp") {
  return `${slug}-${width}.${ext}`;
}

export const IMAGE_PUBLIC_PREFIX = "/assets/img";

export function publicImagePath(fileName: string) {
  return `${IMAGE_PUBLIC_PREFIX}/${fileName}`;
}

export function assertAssetSlugs(relativePaths: string[]) {
  const seen = new Map<string, string>();
  for (const rel of relativePaths) {
    const slug = assetSlug(rel);
    if (!isDescriptiveSlug(slug)) {
      throw new Error(`Image slug is not keyword-descriptive: ${rel} -> ${slug}`);
    }
    const prev = seen.get(slug);
    if (prev) throw new Error(`Image slug collision "${slug}" for ${prev} and ${rel}`);
    seen.set(slug, rel);
  }
  return seen;
}
