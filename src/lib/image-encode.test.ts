import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { encodeDerivatives } from "./image-encode.ts";

test("encoded derivatives drop EXIF and GPS", async () => {
  const sharp = (await import("sharp")).default;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hempston-img-"));
  const source = path.join(dir, "source.jpg");
  await sharp({
    create: { width: 48, height: 24, channels: 3, background: { r: 180, g: 90, b: 40 } },
  })
    .jpeg()
    .withMetadata({
      exif: {
        IFD0: {
          Make: "Canon",
          Model: "EOS",
          ImageDescription: "do-not-publish",
        },
      },
    })
    .toFile(source);

  const inputMeta = await sharp(source).metadata();
  assert.ok(inputMeta.exif, "fixture should carry EXIF before the pipeline");

  const outDir = path.join(dir, "out");
  const encoded = await encodeDerivatives(source, outDir);
  assert.ok(encoded.full.width > 0 && encoded.full.width <= 48);
  assert.ok(encoded.small.width > 0 && encoded.small.width <= encoded.full.width);

  for (const name of ["1600.webp", "800.webp", "1600.avif", "800.avif"]) {
    const meta = await sharp(path.join(outDir, name)).metadata();
    assert.equal(meta.exif, undefined, name);
    assert.equal(meta.xmp, undefined, name);
    assert.equal(meta.iptc, undefined, name);
  }
});
