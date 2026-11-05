export type RegisteredImage = {
  width: number;
  height: number;
  /** AVIF file that matches this import's width. Present in the picture srcset. */
  avif: string;
};

const images = new Map<string, RegisteredImage>();

export function registerImage(src: string, meta: RegisteredImage) {
  images.set(src, meta);
}

export function getImageMeta(src: string) {
  return images.get(src);
}
