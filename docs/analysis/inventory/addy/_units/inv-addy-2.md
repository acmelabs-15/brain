---
unit: inv-addy-2
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-2

## Files assigned
- [x] sources/addy/.claude/rules/skills-contributing.md
- [x] sources/addy/.codex-plugin/plugin.json
- [x] sources/addy/.gemini/commands/build.toml
- [x] sources/addy/.gemini/commands/code-simplify.toml
- [x] sources/addy/.gemini/commands/constraints.toml
- [x] sources/addy/.gemini/commands/planning.toml
- [x] sources/addy/.gemini/commands/review.toml
- [x] sources/addy/.gemini/commands/ship.toml
- [x] sources/addy/.gemini/commands/spec.toml
- [x] sources/addy/.gemini/commands/test.toml
- [x] sources/addy/.gemini/commands/webperf.toml
- [x] sources/addy/.gitattributes

## Outputs produced
- docs/analysis/inventory/addy/claude-rules-skills-contributing-md.md (2033 bytes)
- docs/analysis/inventory/addy/codex-plugin-plugin-json.md (1767 bytes)
- docs/analysis/inventory/addy/gemini-commands-build-toml.md (3381 bytes)
- docs/analysis/inventory/addy/gemini-commands-code-simplify-toml.md (2079 bytes)
- docs/analysis/inventory/addy/gemini-commands-constraints-toml.md (2996 bytes)
- docs/analysis/inventory/addy/gemini-commands-planning-toml.md (1816 bytes)
- docs/analysis/inventory/addy/gemini-commands-review-toml.md (2465 bytes)
- docs/analysis/inventory/addy/gemini-commands-ship-toml.md (3518 bytes)
- docs/analysis/inventory/addy/gemini-commands-spec-toml.md (2059 bytes)
- docs/analysis/inventory/addy/gemini-commands-test-toml.md (1983 bytes)
- docs/analysis/inventory/addy/gemini-commands-webperf-toml.md (2526 bytes)
- docs/analysis/inventory/addy/gitattributes.md (999 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-constraints-toml--commands-constraints-toml.md (1522 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-code-simplify-toml--commands-code-simplify-toml.md (1254 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-ship-toml--commands-ship-toml.md (2887 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-webperf-toml--commands-webperf-toml.md (2140 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-2.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Five commands in this unit (`.gemini/commands/{build,planning,review,spec,test}.toml`) are byte-identical EXACT duplicates of `commands/{build,planning,review,spec,test}.toml` (assigned to unit `inv-addy-3`).
- Four commands in this unit (`.gemini/commands/{constraints,code-simplify,ship,webperf}.toml`) are VARIANT pairs (V1, V2, V3, V4) with their counterparts in `commands/`. Divergence cards have been produced for all four pairs under `docs/analysis/inventory/addy/_divergence/`.
- Across the VARIANT pairs, differences stem primarily from harness adaptations: Gemini CLI's subagent mechanism and tool naming, configuration file paths (`GEMINI.md` vs `CLAUDE.md`/`AGENTS.md`, `~/.gemini/agents/`), and subtle credential advice additions.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~19,511 bytes (~4,900 tokens).
Approximate output written: ~36,600 bytes (~9,150 tokens).
