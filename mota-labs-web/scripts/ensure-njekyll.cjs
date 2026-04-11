/**
 * GitHub Pages runs Jekyll by default and skips paths starting with "_",
 * which removes `out/_next/` → site loads as unstyled "raw" HTML.
 * This file forces Jekyll off. Safe for any static host.
 */
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const marker = path.join(outDir, ".nojekyll");

if (!fs.existsSync(outDir)) {
  console.error("ensure-njekyll: `out/` missing — run `next build` first.");
  process.exit(1);
}

fs.writeFileSync(marker, "");
console.log("ensure-njekyll: wrote out/.nojekyll");
