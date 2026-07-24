Plan: Door collection rebrand to place-and-provenance names

User decisions to incorporate
- Option A naming: Name — descriptive finish/profile subtitle.
- Rename every door into the five requested regions (Sicily, Marseilles, Canary Islands, Tracadie PEI, Devon England); existing Genoa/Barcelona names are retired.
- Colour/stain swatch names also adopt place names so the palette feels branded.

Proposed door naming map (PDF will visualize each with its render)

Sicily
- Etna — Smoked White Oak Slab
- Cefalù — Cerused Washed Oak Shaker
- Palermo — Black Magic Slim Shaker
- Aeolian — Hague Blue Painted Slab
- Noto — Setting Plaster Inset Raised Panel

Marseilles
- Marseille — Driftwood Walnut Shaker
- Cassis — Phantom Mist Raised Panel
- Vieux-Port — Setting Plaster Painted Shaker

Canary Islands
- Tenerife — Ebony Walnut Slab
- Lanzarote — Ebony Oak Slab
- El Hierro — Charleston Green Shaker
- La Palma — Cambridge Navy Painted Shaker
- La Gomera — Charleston Green Inset Raised Panel

Tracadie PEI
- Tracadie — School House White Inset Raised Panel

Devon England
- Devon — Antique Walnut Shaker
- Dartmoor — Lost Souls Beaded Inset
- Exmoor — Mulberry Painted Shaker
- Salcombe — Studio Green Painted Slab
- Torquay — Hague Blue Inset Raised Panel

Proposed swatch naming map
- Decorator's White → Noto White
- Natural Linen → Cefalù Linen
- Setting Plaster → Vieux-Port Plaster
- Phantom Mist → Cassis Mist
- Mulberry → Exmoor Berry
- Charleston Green → El Hierro Green
- Studio Green → Salcombe Green
- Hague Blue → Aeolian Blue
- Cambridge Navy → La Palma Navy
- Lost Souls → Dartmoor Soul
- Black Magic → Palermo Noir
- Smoked Oak → Etna Oak
- Ebony Oak → Lanzarote Oak
- Ebony Walnut → Tenerife Walnut

Step 1 — Generate a PDF catalog
- Download the 19 door-render PNGs from the project's CDN asset URLs.
- Build a styled PDF (US Letter) with a cover page, one door per page (large render + name + subtitle + region tag), grouped by region.
- Convert the PDF to images and inspect every page for layout issues.
- Save the final PDF to /mnt/documents and present it as a downloadable artifact.

Step 2 — Roll names into the codebase
- Update src/data/door-gallery-2026.ts: replace every name field with the place name, keep finish/profile as descriptive subtitles, update category labels where needed.
- Update src/data/finishes.ts: rename paintColors and woodStains entries to the place names while preserving hex values and door-render images.
- Update src/routes/products.door-styles.tsx and src/routes/products.colours-finishes.tsx so headings, alt text, and CTAs use the new names.
- Update src/routes/custom-cabinetry-halifax.tsx featured-door captions and the homepage carousel/explore captions in src/routes/index.tsx.
- Update any SEO meta, schema, or internal-anchor text that references the old door/finish names.

Step 3 — Verify
- Run bun run build to catch any broken references.
- Spot-check the door-styles, colours-finishes, Halifax, and home routes in the preview for correct labels and images.

Deliverables
- PDF catalog of proposed names with visuals (artifact in /mnt/documents).
- Fully renamed door collection and colour/stain palette across the site.

Approve this plan to switch to build mode and generate the PDF + code rollout.