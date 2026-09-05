---
unit: inv-addy-38
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-38

## Files assigned
- [x] sources/addy/scripts/validate-reference-links-test.js
- [x] sources/addy/scripts/validate-reference-links.js
- [x] sources/addy/scripts/validate-skills.js
- [x] sources/addy/scripts/validate-versions-test.js
- [x] sources/addy/scripts/validate-versions.js
- [x] sources/addy/skills/api-and-interface-design/SKILL.md
- [x] sources/addy/skills/browser-testing-with-devtools/SKILL.md

## Outputs produced
- docs/analysis/inventory/addy/scripts-validate-reference-links-test-js.md (3966 bytes)
- docs/analysis/inventory/addy/scripts-validate-reference-links-js.md (3918 bytes)
- docs/analysis/inventory/addy/scripts-validate-skills-js.md (3427 bytes)
- docs/analysis/inventory/addy/scripts-validate-versions-test-js.md (3147 bytes)
- docs/analysis/inventory/addy/scripts-validate-versions-js.md (3128 bytes)
- docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md (5927 bytes)
- docs/analysis/inventory/addy/skills-browser-testing-with-devtools-skill-md.md (6563 bytes)

## Scripts executed
- scripts/validate-reference-links-test.js, `bun test ./scripts/validate-reference-links-test.js`, exit code 0
- scripts/validate-reference-links.js, `bun scripts/validate-reference-links.js`, exit code 0
- scripts/validate-skills.js, `bun scripts/validate-skills.js`, exit code 0
- scripts/validate-versions-test.js, `bun test ./scripts/validate-versions-test.js`, exit code 0
- scripts/validate-versions.js, `bun scripts/validate-versions.js`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The 5 scripts in this unit (`validate-reference-links-test.js`, `validate-reference-links.js`, `validate-skills.js`, `validate-versions-test.js`, `validate-versions.js`) form core CI gates invoked in `.github/workflows/test-plugin-install.yml`.
- All 5 scripts use CommonJS `require()` in `.js` files without a local `package.json` in `sources/addy/`. When executed under Node from a repository with root `"type": "module"`, they fail with a `ReferenceError` unless run via `bun` or in an isolated CommonJS package context.
- `skills/api-and-interface-design/SKILL.md` defines key cross-cutting design concepts: `Hyrum's Law`, `The One-Version Rule`, boundary validation, and idempotency key handling (atomic claims, payload hash, retention), invoked by `skills/using-agent-skills/SKILL.md`, `skills/spec-driven-development/SKILL.md`, and `skills/git-workflow-and-versioning/SKILL.md`.
- `skills/browser-testing-with-devtools/SKILL.md` defines the Chrome DevTools MCP verification workflow and critical security boundaries (treating browser DOM/network data as untrusted data, ephemeral profile isolation), invoked by `/test` command (`commands/test.toml`) and `agents/web-performance-auditor.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,800 tokens (43,228 bytes across 7 source files plus related CI and skill files). Approximate tokens of output written: ~7,500 tokens (30,076 bytes across 7 inventory cards plus unit report).
