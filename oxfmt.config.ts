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
    // Anchored at the root: a bare "hooks" also matches brain's own scripts/hooks/.
    "/hooks",
    "licenses",
    "commands",
    ".claude/commands",
    // new-doc copies these templates byte for byte; the formatter would read `{{id}}` in
    // their frontmatter as YAML and rewrite it to `{ { id } }`.
    "scripts/workspace/templates",
    // The fixtures are repos as an agent or brain 0.8 wrote them. The formatter would join a
    // glossary entry's lines into one and change the files the migrate mode takes as input.
    "scripts/workspace/__tests__/fixtures",
    // A byte-for-byte copy of a user's hand-written AGENTS.md, the overlap report's input.
    "scripts/setup/__tests__/fixtures",
    // Real eval replies and traces from CI, and CHANGELOG sections as changesets writes them,
    // whose bullet continuation lines the formatter would join.
    "scripts/evals/__tests__/fixtures",
    "scripts/version/__tests__/fixtures",
  ],
});
