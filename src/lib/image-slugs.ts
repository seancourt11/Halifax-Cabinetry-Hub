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

  "projects/gh-oak-island-painted-beams.jpg": "oak-island-painted-kitchen-cabinetry-halifax",
  "projects/glen-haven-brass-hood-kitchen.jpg": "painted-shaker-kitchen-brass-hood-halifax",
  "projects/gh-white-cabinets-brass-hood.jpg": "painted-white-kitchen-brass-hood-halifax",
  "projects/gh-butler-pantry-glass.jpg": "glass-front-butler-pantry-cabinetry-halifax",
  "projects/gh-marble-farmhouse-sink.jpg": "marble-farmhouse-sink-kitchen-halifax",
  "projects/nwc-oak-island-kitchen.jpg": "white-oak-island-kitchen-cabinetry-halifax",
  "projects/nwc-brass-hood-white-cabinets.jpg": "painted-overlay-kitchen-brass-hood-halifax",
  "projects/nwc-marble-brass-faucet.jpg": "marble-brass-faucet-kitchen-detail-halifax",
  "projects/nwc-navy-tile-backsplash.jpg": "navy-tile-backsplash-kitchen-cabinetry-halifax",
  "projects/md-laundry-cabinetry.jpg": "painted-shaker-laundry-cabinetry-halifax",
  "projects/md-oak-double-vanity.jpg": "light-oak-double-vanity-cabinetry-halifax",
  "projects/md-white-kitchen-brass-pendants.jpg":
    "painted-white-kitchen-brass-pendant-cabinetry-halifax",
  "projects/md-dining-mirror.jpg": "dining-room-framed-mirror-millwork-halifax",
  "projects/dba-kent-kitchen-1.jpg": "inset-white-oak-island-kitchen-cabinetry-halifax",
  "projects/dba-kent-kitchen-2.jpg": "inset-kitchen-hemlock-beam-coffee-station-halifax",
  "projects/dba-kent-pantry.jpg": "painted-entry-built-in-cabinetry-halifax",
  "projects/dba-pl-kitchen-1.jpg": "timber-ceiling-kitchen-cabinetry-halifax",
  "projects/dba-pl-kitchen-2.jpg": "sage-green-mudroom-cabinetry-halifax",
  "projects/dba-pl-island-kitchen.jpg": "dark-stained-oak-island-kitchen-cabinetry-halifax",
  "projects/grey-oak-bar-pantry.jpg": "grey-oak-bar-pantry-cabinetry-halifax",
  "projects/modern-marble-kitchen.jpg": "light-oak-marble-island-kitchen-cabinetry-halifax",
  "projects/reeded-oak-vanity.jpg": "reeded-oak-vanity-cabinetry-halifax",
  "projects/navy-cabinetry-brass-pulls.jpg": "navy-painted-shaker-kitchen-brass-pulls-halifax",
  "projects/white-marble-kitchen.jpg": "white-painted-kitchen-glass-front-uppers-halifax",
  "projects/white-oak-cabinet-detail.jpg": "rift-cut-white-oak-cabinet-detail-halifax",
  "projects/farmhouse-sink-blue-tile.jpg": "farmhouse-sink-blue-tile-kitchen-halifax",
  "projects/transitional-navy-island-kitchen.jpg": "navy-island-kitchen-cabinetry-halifax",
  "projects/moncton-built-ins-fireplace-wall.jpg":
    "dieppe-painted-shaker-built-ins-fireplace-surround",
  "projects/crombie-warm-oak-stairwell.jpg": "warm-oak-stair-millwork-framed-mirror-halifax",

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
    "painted-cabinetry-stained-oak-island-kitchen-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1695-f2-paintedbeams-1.jpg":
    "painted-ceiling-beams-kitchen-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1711-f-v2-no-beams.jpg":
    "great-room-custom-kitchen-halifax",
  "projects/gallery/gh-31westgate-IndianRd-17260-f.jpg":
    "range-hood-marble-backsplash-kitchen-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1761-f-paintedbeams.jpg":
    "island-seating-brass-pendants-kitchen-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1776-fv2-paintedbeams.jpg":
    "painted-beam-ceiling-cased-openings-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1798-f.jpg": "glass-upper-butler-pantry-kitchen-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1819-f3-paintedbeams.jpg":
    "layered-millwork-detail-halifax",
  "projects/gallery/gh-31westgate-IndianRd-1839-f.jpg": "living-area-beyond-custom-kitchen-halifax",
  "projects/gallery/crombie-1.jpg": "panelled-kitchen-cabinetry-halifax",
  "projects/gallery/crombie-2.jpg": "warm-oak-stair-millwork-halifax",
  "projects/gallery/crombie-3.jpg": "painted-cabinetry-brass-hardware-halifax",
  "projects/gallery/crombie-4.jpg": "pantry-prep-zone-cabinetry-halifax",
  "projects/gallery/crombie-5.jpg": "reeded-oak-vanity-detail-halifax",
  "projects/gallery/crombie-6.jpg": "marble-waterfall-island-edge-halifax",
  "projects/gallery/crombie-7.jpg": "dining-room-millwork-halifax",
  "projects/gallery/crombie-8.jpg": "range-hood-cabinetry-surround-halifax",
  "projects/gallery/crombie-9.jpg": "integrated-appliance-panel-kitchen-halifax",
  "projects/gallery/crombie-10.jpg": "island-lighting-kitchen-millwork-halifax",
  "projects/gallery/crombie-11.jpg": "interior-finish-detail-cabinetry-halifax",
  "projects/gallery/keep-01.jpg": "white-kitchen-brass-pendants-halifax",
  "projects/gallery/keep-02.jpg": "island-seating-appliance-panels-kitchen-halifax",
  "projects/gallery/keep-03.jpg": "range-hood-millwork-detail-halifax",
  "projects/gallery/keep-04.jpg": "marble-countertop-prep-zone-kitchen-halifax",
  "projects/gallery/keep-05.jpg": "butler-pantry-cabinetry-halifax",
  "projects/gallery/keep-06.jpg": "laundry-room-cabinetry-halifax",
  "projects/gallery/keep-07.jpg": "oak-double-vanity-bathroom-halifax",
  "projects/gallery/keep-08.jpg": "dining-mirrored-millwork-halifax",
  "projects/gallery/keep-09.jpg": "painted-cabinetry-hardware-detail-halifax",
  "projects/gallery/keep-10.jpg": "natural-light-kitchen-island-halifax",
  "projects/gallery/keep-11.jpg": "cabinetry-to-ceiling-crown-moulding-halifax",
  "projects/gallery/keep-12.jpg": "integrated-fridge-panels-kitchen-halifax",
  "projects/gallery/keep-13.jpg": "powder-room-cabinetry-halifax",
  "projects/gallery/keep-14.jpg": "open-living-area-beyond-kitchen-halifax",
  "projects/gallery/keep-15.jpg": "cabinetry-hardware-closeup-halifax",
  "projects/gallery/keep-16.jpg": "coffee-station-millwork-halifax",
  "projects/gallery/keep-17.jpg": "primary-bath-vanity-cabinetry-halifax",
  "projects/gallery/keep-18.jpg": "bedroom-built-in-cabinetry-halifax",
  "projects/gallery/keep-19.jpg": "mudroom-cabinetry-bench-halifax",
  "projects/gallery/keep-20.jpg": "white-kitchen-wide-view-halifax",
  "projects/gallery/keep-21.jpg": "house-exterior-evening-view-halifax",
  "projects/gallery/nwc-CANDREWS-1.jpg": "white-oak-island-kitchen-wide-halifax",
  "projects/gallery/nwc-CANDREWS-2.jpg": "white-kitchen-brass-range-hood-halifax",
  "projects/gallery/nwc-CANDREWS-3.jpg": "navy-tile-backsplash-detail-halifax",
  "projects/gallery/nwc-CANDREWS-4.jpg": "island-seating-coastal-light-kitchen-halifax",
  "projects/gallery/nwc-CANDREWS-5.jpg": "integrated-appliance-panels-kitchen-halifax",
  "projects/gallery/nwc-CANDREWS-7.jpg": "marble-counter-prep-zone-kitchen-halifax",
  "projects/gallery/nwc-CANDREWS-8.jpg": "cabinetry-to-ceiling-kitchen-halifax",
  "projects/gallery/nwc-CANDREWS-8-2.jpg": "open-kitchen-wide-view-halifax",
};

const SUBJECT =
  /(kitchen|cabinetr|cabinet|door|oak|vanity|halifax|millwork|pantry|laundry|stone|walnut|shaker|inset|painted|fireplace|built-in|dieppe|waterfront|workshop|dovetail|material|sample|share|stair|hood|island|beam|tile|sink|brass|navy|plaster|profile|mirror|marble|finish|mudroom|hempston)/;

/** Project and client names are not allowed in a public image slug. */
export const PROJECT_NAME_IN_SLUG =
  /(glen-haven|northwest-cove|north-west|house-on-kent|house-on-peter|peter-lowe|modern-drift|crombie|coastal-cottage|westgate|candrews)/;

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
  if (key.startsWith("projects/")) {
    base = base
      .replace(/^gh-/, "")
      .replace(/^nwc-/, "")
      .replace(/^md-/, "")
      .replace(/^dba-kent-/, "")
      .replace(/^dba-pl-/, "")
      .replace(/^glen-haven-/, "");
    if (!/(halifax|dieppe)/.test(base)) base = `${base}-halifax`;
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
    if (!isDescriptiveSlug(slug) || PROJECT_NAME_IN_SLUG.test(slug)) {
      throw new Error(`Image slug is not keyword-descriptive: ${rel} -> ${slug}`);
    }
    const prev = seen.get(slug);
    if (prev) throw new Error(`Image slug collision "${slug}" for ${prev} and ${rel}`);
    seen.set(slug, rel);
  }
  return seen;
}
