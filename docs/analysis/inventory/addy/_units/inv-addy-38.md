---
unit: inv-addy-38
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-38

## Files assigned
- [x] sources/addy/scripts/validate-reference-links-test.js (5666 bytes, 154 lines)
- [x] sources/addy/scripts/validate-reference-links.js (3832 bytes, 104 lines)
- [x] sources/addy/scripts/validate-skills.js (2401 bytes, 70 lines)
- [x] sources/addy/scripts/validate-versions-test.js (957 bytes, 36 lines)
- [x] sources/addy/scripts/validate-versions.js (949 bytes, 37 lines)
- [x] sources/addy/skills/api-and-interface-design/SKILL.md (14884 bytes, 368 lines)
- [x] sources/addy/skills/browser-testing-with-devtools/SKILL.md (14539 bytes, 318 lines)

## Outputs produced
- docs/analysis/inventory/addy/scripts-validate-reference-links-test-js.md (5331 bytes)
- docs/analysis/inventory/addy/scripts-validate-reference-links-js.md (4263 bytes)
- docs/analysis/inventory/addy/scripts-validate-skills-js.md (3857 bytes)
- docs/analysis/inventory/addy/scripts-validate-versions-test-js.md (4160 bytes)
- docs/analysis/inventory/addy/scripts-validate-versions-js.md (4129 bytes)
- docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md (5858 bytes)
- docs/analysis/inventory/addy/skills-browser-testing-with-devtools-skill-md.md (5985 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-38.md (2650 bytes)

## Scripts executed
- sources/addy/scripts/validate-reference-links-test.js, `bun test ./scripts/validate-reference-links-test.js`, exit code 0
- sources/addy/scripts/validate-reference-links.js, `bun scripts/validate-reference-links.js`, exit code 0
- sources/addy/scripts/validate-skills.js, `bun scripts/validate-skills.js`, exit code 0
- sources/addy/scripts/validate-versions-test.js, `bun test ./scripts/validate-versions-test.js`, exit code 0
- sources/addy/scripts/validate-versions.js, `bun scripts/validate-versions.js`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validate-reference-links-test.js` and `scripts/validate-reference-links.js` guard references to root checklists across skills; in CI (`.github/workflows/test-plugin-install.yml`), these run alongside `validate-skills.js` and `validate-versions.js`.
- `scripts/validate-skills.js` delegates core lint logic to `scripts/lib/skill-lint.js` and checks compliance against `docs/skill-anatomy.md`.
- `scripts/validate-versions.js` and `scripts/validate-versions-test.js` ensure version sync across 5 manifests: `plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json`.
- `skills/api-and-interface-design/SKILL.md` defines contract-first engineering, Hyrum's Law, One-Version Rule, and rigorous distributed idempotency handling, invoked during `addy:Build`. It links to `skills/deprecation-and-migration/SKILL.md` for safe deprecation paths.
- `skills/browser-testing-with-devtools/SKILL.md` defines live runtime browser testing via Chrome DevTools MCP during `addy:Verify`, establishing mandatory profile isolation and prompt injection defense boundaries.
- All 5 JavaScript scripts run cleanly under `bun` / `bun test` in this repository environment. When invoked under system `node` directly within this worktree, Node detects the root `package.json` `"type": "module"` configuration and fails on CommonJS `require` calls. In upstream standalone CI, Node runs in an isolated root without that parent module type declaration.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,800 tokens (43,228 bytes across 7 files)
Approximate tokens of output written: ~9,050 tokens (36,233 bytes across 8 files)
