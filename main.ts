// One Star, Written in Sap — make.fun entry.
// Writes a single one-line 1-star review, in the voice of a houseplant
// about its human owner, to entry.txt in the make.fun output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  'One star. I wrote this review in my own sap on the windowsill; he wiped it off, called it "a mess," then watered me with cold coffee and called that enrichment.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
