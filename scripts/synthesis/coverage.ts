import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";

function checkManifests() {
  const pkgs = ["addy", "matt", "rjm"];
  let unchecked = 0;
  for (const pkg of pkgs) {
    const path = `docs/analysis/manifest/${pkg}.md`;
    if (!existsSync(path)) continue;
    const content = readFileSync(path, "utf-8");
    const lines = content.split("\n");
    for (const line of lines) {
      if (line.includes("| [ ] |") || line.includes("| [ ] (unavailable) |")) {
        unchecked++;
      }
    }
  }
  return unchecked;
}

function checkInventories() {
  let emptyFields = 0;
  // Basic implementation for phase 0 (no inventory files yet)
  return emptyFields;
}

const un = checkManifests();
const inv = checkInventories();
console.log(`Unchecked manifest rows: ${un}`);
console.log(`Empty required inventory fields: ${inv}`);
if (un > 0 || inv > 0) {
  process.exit(1);
} else {
  console.log("Coverage: clean");
}
