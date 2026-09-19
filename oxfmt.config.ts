// Format: Ultracite's Oxfmt preset with two explicit deviations, stated here so
// they are decisions and not silent acceptance of the preset:
//   printWidth 100, not 80: brain's scripts are plain TypeScript with long path strings.
//   trailingComma "all", not "es5": one convention across ACMElabs repos.
import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

export default defineConfig({
  ...ultracite,
  printWidth: 100,
  trailingComma: "all",
  ignorePatterns: [
    ...ultracite.ignorePatterns,
    "skills",
    "references",
    "agents",
    "hooks",
    "licenses",
    "commands",
    ".claude/commands",
  ],
});
