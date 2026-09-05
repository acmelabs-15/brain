---
unit: inv-addy-5
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-5

## Files assigned
- [x] sources/addy/docs/comparison.md
- [x] sources/addy/docs/copilot-setup.md
- [x] sources/addy/docs/cursor-setup.md
- [x] sources/addy/docs/developer-onboarding.md
- [x] sources/addy/docs/gemini-cli-setup.md
- [x] sources/addy/docs/getting-started.md

## Outputs produced
- docs/analysis/inventory/addy/docs-comparison-md.md (4212 bytes)
- docs/analysis/inventory/addy/docs-copilot-setup-md.md (3397 bytes)
- docs/analysis/inventory/addy/docs-cursor-setup-md.md (4287 bytes)
- docs/analysis/inventory/addy/docs-developer-onboarding-md.md (4493 bytes)
- docs/analysis/inventory/addy/docs-gemini-cli-setup-md.md (4306 bytes)
- docs/analysis/inventory/addy/docs-getting-started-md.md (5903 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/comparison.md` provides comparative positioning against `obra/superpowers` and `mattpocock/skills`, highlighting trade-offs in upfront reasoning vs broad validation passes and anti-rationalization tables.
- `docs/copilot-setup.md` notes a critical platform requirement: GitHub Copilot silently ignores custom agent files named `*.md`, requiring `*.agent.md`.
- `docs/cursor-setup.md` warns against putting whole `SKILL.md` bodies into `.cursor/rules/*.mdc` rules or legacy `.cursorrules` monoliths.
- `docs/developer-onboarding.md` establishes the five composable layers (skills, personas, commands, references, evals) and clarifies that root `AGENTS.md` and `CLAUDE.md` configure repo-level development, not user projects.
- `docs/gemini-cli-setup.md` notes that `/planning` is used instead of `/plan` because `/plan` collides with a Gemini CLI internal command name.
- `docs/getting-started.md` documents a known packaging limitation (issue #361): installing single skills via `npx skills add` does not copy repo-level `references/*.md` checklists.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,955 tokens (47,822 bytes).
Approximate tokens of output written: ~6,650 tokens (26,598 bytes).
