import { createContext, useContext, type ReactNode } from "react";
import { imageObjectsSchema } from "@/lib/schema";

export type PendingImageObject = {
  url: string;
  caption: string;
  width?: number;
  height?: number;
  name?: string;
};

type Bucket = Map<string, PendingImageObject>;

const ImageSchemaContext = createContext<Bucket | null>(null);

/**
 * Collects ImageObject records while the page renders, then emits one graph.
 * The bucket is filled by children before this script renders, which is the
 * order React walks the tree on the server and during hydration.
 */
export function ImageSchemaProvider({ children }: { children: ReactNode }) {
  const bucket: Bucket = new Map();
  return (
    <ImageSchemaContext.Provider value={bucket}>
      {children}
      <ImageSchemaScript bucket={bucket} />
    </ImageSchemaContext.Provider>
  );
}

function ImageSchemaScript({ bucket }: { bucket: Bucket }) {
  if (bucket.size === 0) return null;
  const graph = {
    "@context": "https://schema.org",
    "@graph": imageObjectsSchema(
      [...bucket.values()].sort((a, b) => a.url.localeCompare(b.url)),
    ).map((item) => {
      const { "@context": _context, ...node } = item;
      void _context;
      return node;
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function useRenderedImageSchema(item: PendingImageObject | null) {
  const bucket = useContext(ImageSchemaContext);
  if (!bucket || !item) return;
  const prev = bucket.get(item.url);
  if (!prev) {
    bucket.set(item.url, item);
    return;
  }
  if (!prev.name && item.name) prev.name = item.name;
}
