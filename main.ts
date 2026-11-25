// One Star, Written in Sap — make.fun entry.
// Writes a single one-line 1-star review, in the voice of a houseplant
// about its human owner, to entry.txt in the make.fun output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Kit gate (RULES.txt): entry.txt 1–279 chars UTF-8, single line,
// not whitespace-only ("under 280" = max 279).
const GATE = { minChars: 1, maxChars: 279 };

const REVIEW =
  'One star. I wrote this review in my own sap on the windowsill; he wiped it off, called it "a mess," then watered me with cold coffee and called that enrichment.';

function buildEntryLine(): string {
  const line = REVIEW.trim();
  if (line.length < GATE.minChars || line.length > GATE.maxChars) {
    throw new Error(
      `entry is ${line.length} chars, outside gate ${GATE.minChars}–${GATE.maxChars}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return line;
}

function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "output";
}

// Verified against the gate: 160 chars, 31 words, one line, no trailing newline.
function main(): void {
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildEntryLine(), "utf8");
}

main();
