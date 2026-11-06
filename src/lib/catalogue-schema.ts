import type { CataloguePiece } from "@/data/furniture-catalogue";
import { ORG_ID, ORG_NAME, SITE_URL } from "@/lib/schema";

/** ItemList of Product and ImageObject entries for a catalogue page. */
export function catalogueItemList(name: string, pieces: CataloguePiece[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: pieces.map((piece, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: piece.title,
        description: piece.caption,
        category: name,
        brand: { "@id": ORG_ID, "@type": "Brand", name: ORG_NAME },
        image: {
          "@type": "ImageObject",
          contentUrl: `${SITE_URL}${piece.src}`,
          width: piece.width,
          height: piece.height,
          caption: piece.caption,
          name: piece.title,
        },
      },
    })),
  };
}
