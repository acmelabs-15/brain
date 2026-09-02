import { readFile } from "fs/promises";
async function run() {
  const pkgs = ["addy", "matt", "rjm"];
  for (const pkg of pkgs) {
    const lines = (await readFile(`docs/analysis/manifest/${pkg}.md`, "utf-8")).split("\n").filter(l => l.startsWith("|") && !l.includes("Path | Bytes"));
    let currentUnitSize = 0;
    let unitIdx = 1;
    let filesInUnit = 0;
    for (const line of lines) {
      const parts = line.split("|").map(s => s.trim());
      if (parts.length < 3) continue;
      const bytes = parseInt(parts[2], 10);
      if (isNaN(bytes)) continue;
      if (currentUnitSize + bytes > 50000 && filesInUnit > 0) {
        console.log(`| inv-${pkg}-${unitIdx} | ${pkg} | ${filesInUnit} | ${currentUnitSize} | pending | — | — |`);
        unitIdx++;
        currentUnitSize = 0;
        filesInUnit = 0;
      }
      currentUnitSize += bytes;
      filesInUnit++;
    }
    if (filesInUnit > 0) {
      console.log(`| inv-${pkg}-${unitIdx} | ${pkg} | ${filesInUnit} | ${currentUnitSize} | pending | — | — |`);
    }
  }
}
run();
