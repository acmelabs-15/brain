// Lint: Ultracite's Oxlint core preset, extended by hand. The TypeScript compiler
// check stays a separate step, `bun run typecheck`. Every relaxation below is a
// decision with its reason; see docs/decisions/DEC-001-lint-and-format.md.
import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";

export default defineConfig({
  extends: [core],
  ignorePatterns: [
    ...core.ignorePatterns,
    // Vendored and seeded upstream files are never linted or formatted by brain.
    "skills",
    "references",
    "agents",
    "hooks",
    "licenses",
    "commands",
    ".claude/commands",
  ],
  rules: {
    // Function declarations hoist, so a file reads top-down with helpers below their callers.
    "func-style": "off",
    // Object keys are ordered by meaning: a pin file's fields, a fixture tree's paths.
    "sort-keys": "off",
    // The sync is sequential by design: ordered writes, and a collision check that must
    // finish before the first write. Promise.all would reorder both.
    "no-await-in-loop": "off",
    // The spec's code style uses `type` for object shapes.
    "typescript/consistent-type-definitions": ["error", "type"],
  },
});
