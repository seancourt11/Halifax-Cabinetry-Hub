// Latest 2026 door render gallery — curated featured set.
// Only the doors explicitly selected for the site are exported below.

import driftwoodWalnutShaker from "@/assets/door-gallery-2026/01_driftwood_walnut_shaker.png";
import ebonyWalnutSlab from "@/assets/door-gallery-2026/02_ebony_walnut_slab.png";
import antiqueWalnutShaker from "@/assets/door-gallery-2026/03_antique_walnut_shaker.png";
import cerusedOakShaker from "@/assets/door-gallery-2026/04_cerused_oak_shaker.png";
import ebonyOakSlab from "@/assets/door-gallery-2026/05_ebony_oak_slab.png";
import smokedOakSlab from "@/assets/door-gallery-2026/06_smoked_oak_slab.png";
import cambridgeNavyShaker from "@/assets/door-gallery-2026/08_cambridge_navy_shaker.png";
import mulberryShaker from "@/assets/door-gallery-2026/09_mulberry_shaker.png";
import studioGreenSlab from "@/assets/door-gallery-2026/10_studio_green_slab.png";
import settingPlasterShaker from "@/assets/door-gallery-2026/11_setting_plaster_shaker.png";
import hagueBlueSlab from "@/assets/door-gallery-2026/12_hague_blue_slab.png";
import dorrP405CharlestonGreen from "@/assets/door-gallery-2026/door_3_P-405-06_charleston_green.png";
import athenaLostSouls from "@/assets/door-gallery-2026/door_athena_lost_souls.png";
import barcelonaPhantomMist from "@/assets/door-gallery-2026/door_barcelona_phantom_mist.png";
import genoaBlackMagic from "@/assets/door-gallery-2026/door_genoa_black_magic.png";
import insetMalibuSettingPlaster from "@/assets/door-gallery-2026/inset_malibu_setting_plaster.png";
import insetMalibuCharlestonGreen from "@/assets/door-gallery-2026/inset_malibu_charleston_green.png";
import insetMalibuHagueBlue from "@/assets/door-gallery-2026/inset_malibu_hague_blue.png";
import insetMalibuSchoolHouseWhite from "@/assets/door-gallery-2026/inset_malibu_school_house_white.png";

export type GalleryItem2026 = {
  src: string;
  name: string;
  profile: string;
  finish: string;
  category: "Modern Slab" | "Shaker" | "Beaded" | "Laminate" | "Inset" | "Specialty Metal";
};

// Featured painted doors + stained wood slabs — place-and-provenance names.
export const showcaseGallery: GalleryItem2026[] = [
  { src: smokedOakSlab, name: "Etna", profile: "White Oak Slab", finish: "Smoked Oak", category: "Modern Slab" },
  { src: driftwoodWalnutShaker, name: "Marseille", profile: "Walnut Shaker", finish: "Driftwood", category: "Shaker" },
  { src: cerusedOakShaker, name: "Cefalù", profile: "Cerused Washed Oak", finish: "White Oak", category: "Shaker" },
  { src: antiqueWalnutShaker, name: "Devon", profile: "Walnut Shaker", finish: "Antique Walnut", category: "Shaker" },
  { src: ebonyWalnutSlab, name: "Tenerife", profile: "Walnut Slab", finish: "Ebony Walnut Stain", category: "Modern Slab" },
  { src: ebonyOakSlab, name: "Lanzarote", profile: "White Oak Slab", finish: "Ebony Oak", category: "Modern Slab" },
  { src: genoaBlackMagic, name: "Palermo", profile: "Slim Shaker", finish: "Black Magic", category: "Shaker" },
  { src: barcelonaPhantomMist, name: "Cassis", profile: "Raised Panel", finish: "Phantom Mist", category: "Shaker" },
  { src: athenaLostSouls, name: "Dartmoor", profile: "Beaded Inset", finish: "Lost Souls", category: "Beaded" },
  { src: dorrP405CharlestonGreen, name: "El Hierro", profile: "Recessed Panel Shaker", finish: "Charleston Green", category: "Shaker" },
  { src: hagueBlueSlab, name: "Aeolian", profile: "Painted Slab", finish: "Hague Blue", category: "Modern Slab" },
  { src: mulberryShaker, name: "Exmoor", profile: "Painted Shaker", finish: "Mulberry", category: "Shaker" },
  { src: studioGreenSlab, name: "Salcombe", profile: "Painted Slab", finish: "Studio Green", category: "Modern Slab" },
  { src: settingPlasterShaker, name: "Vieux-Port", profile: "Painted Shaker", finish: "Setting Plaster", category: "Shaker" },
  { src: cambridgeNavyShaker, name: "La Palma", profile: "Painted Shaker", finish: "Cambridge Navy", category: "Shaker" },
];

// Legacy exports kept for compatibility across pages — all point at the curated featured set.
export const overlayGallery2026: GalleryItem2026[] = showcaseGallery;
export const laminateSlabGallery: GalleryItem2026[] = [];
export const specialtyMetalGallery: GalleryItem2026[] = [];

export const insetGallery2026: GalleryItem2026[] = [
  { src: insetMalibuSettingPlaster, name: "Noto", profile: "Inset Raised Panel", finish: "Setting Plaster", category: "Inset" },
  { src: insetMalibuSchoolHouseWhite, name: "Tracadie", profile: "Inset Raised Panel", finish: "School House White", category: "Inset" },
  { src: insetMalibuHagueBlue, name: "Torquay", profile: "Inset Raised Panel", finish: "Hague Blue", category: "Inset" },
  { src: insetMalibuCharlestonGreen, name: "La Gomera", profile: "Inset Raised Panel", finish: "Charleston Green", category: "Inset" },
];

// A curated mix of inset face frame profiles — not just Malibu.
export const featuredFaceFrames: GalleryItem2026[] = [
  { src: insetMalibuSettingPlaster, name: "Noto", profile: "Inset Raised Panel", finish: "Setting Plaster", category: "Inset" },
  { src: athenaLostSouls, name: "Dartmoor", profile: "Inset Beaded", finish: "Lost Souls", category: "Inset" },
  { src: dorrP405CharlestonGreen, name: "El Hierro", profile: "Inset Shaker", finish: "Charleston Green", category: "Inset" },
  { src: insetMalibuHagueBlue, name: "Torquay", profile: "Inset Raised Panel", finish: "Hague Blue", category: "Inset" },
  { src: barcelonaPhantomMist, name: "Cassis", profile: "Inset Raised Panel", finish: "Phantom Mist", category: "Inset" },
  { src: insetMalibuCharlestonGreen, name: "La Gomera", profile: "Inset Raised Panel", finish: "Charleston Green", category: "Inset" },
];

export const modernSlabGallery: GalleryItem2026[] = showcaseGallery.filter((d) => d.category === "Modern Slab");

export const signatureDoorStyleRenders: Record<string, GalleryItem2026> = {
  shaker: showcaseGallery.find((d) => d.profile === "Painted Shaker") ?? showcaseGallery[5],
  "slim-shaker": showcaseGallery.find((d) => d.profile === "Slim Shaker") ?? showcaseGallery[0],
  slab: showcaseGallery.find((d) => d.category === "Modern Slab") ?? showcaseGallery[4],
  "raised-panel": showcaseGallery.find((d) => d.profile === "Raised Panel") ?? showcaseGallery[1],
  "recessed-panel": showcaseGallery.find((d) => d.profile === "Recessed Panel Shaker") ?? showcaseGallery[3],
  beaded: showcaseGallery.find((d) => d.category === "Beaded") ?? insetGallery2026[0],
  reeded: insetGallery2026[0],
};
