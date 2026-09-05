---
unit: inv-addy-2
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-2

## Files assigned
- [x] sources/addy/.claude/rules/skills-contributing.md (988 bytes, 16 lines)
- [x] sources/addy/.codex-plugin/plugin.json (1119 bytes, 30 lines)
- [x] sources/addy/.gemini/commands/build.toml (3840 bytes, 44 lines)
- [x] sources/addy/.gemini/commands/code-simplify.toml (1066 bytes, 22 lines)
- [x] sources/addy/.gemini/commands/constraints.toml (2775 bytes, 33 lines)
- [x] sources/addy/.gemini/commands/planning.toml (635 bytes, 16 lines)
- [x] sources/addy/.gemini/commands/review.toml (844 bytes, 16 lines)
- [x] sources/addy/.gemini/commands/ship.toml (4780 bytes, 72 lines)
- [x] sources/addy/.gemini/commands/spec.toml (911 bytes, 17 lines)
- [x] sources/addy/.gemini/commands/test.toml (650 bytes, 19 lines)
- [x] sources/addy/.gemini/commands/webperf.toml (1884 bytes, 33 lines)
- [x] sources/addy/.gitattributes (19 bytes, 2 lines)

## Outputs produced
- docs/analysis/inventory/addy/claude-rules-skills-contributing-md.md (1843 bytes)
- docs/analysis/inventory/addy/codex-plugin-plugin-json.md (1600 bytes)
- docs/analysis/inventory/addy/gemini-commands-build-toml.md (2842 bytes)
- docs/analysis/inventory/addy/gemini-commands-code-simplify-toml.md (2237 bytes)
- docs/analysis/inventory/addy/gemini-commands-constraints-toml.md (2731 bytes)
- docs/analysis/inventory/addy/gemini-commands-planning-toml.md (1737 bytes)
- docs/analysis/inventory/addy/gemini-commands-review-toml.md (2184 bytes)
- docs/analysis/inventory/addy/gemini-commands-ship-toml.md (2584 bytes)
- docs/analysis/inventory/addy/gemini-commands-spec-toml.md (1671 bytes)
- docs/analysis/inventory/addy/gemini-commands-test-toml.md (1598 bytes)
- docs/analysis/inventory/addy/gemini-commands-webperf-toml.md (2179 bytes)
- docs/analysis/inventory/addy/gitattributes.md (898 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-constraints-toml--commands-constraints-toml.md (1558 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-code-simplify-toml--commands-code-simplify-toml.md (1376 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-ship-toml--commands-ship-toml.md (2969 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-webperf-toml--commands-webperf-toml.md (2368 bytes)
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
- Slash commands in `.gemini/commands/*.toml` represent the Gemini CLI implementation of the command suite (parallel to `.claude/commands/*.md` from `inv-addy-1` and `commands/*.toml` from `inv-addy-3`).
- EXACT duplicates with `commands/*.toml`:
  - `build.toml`, `spec.toml`, `review.toml`, `test.toml`, `planning.toml` are byte-identical between `.gemini/commands/` and `commands/`. Per method and unit dispatch instructions, cards were produced with `aliases: []` so that canonical entries in later units can reference them.
- VARIANT duplicates with `commands/*.toml`:
  - V1: `.gemini/commands/constraints.toml` ↔ `commands/constraints.toml` (1 hunk: `GEMINI.md` vs `CLAUDE.md`).
  - V2: `.gemini/commands/code-simplify.toml` ↔ `commands/code-simplify.toml` (1 hunk: `GEMINI.md` vs `AGENTS.md`).
  - V3: `.gemini/commands/ship.toml` ↔ `commands/ship.toml` (2 hunks: Gemini CLI tool exposure & subagent model constraints).
  - V4: `.gemini/commands/webperf.toml` ↔ `commands/webperf.toml` (2 hunks: CrUX credential advice & persona assumption vs subagent tool spawning).
- Defects found:
  - `missing-path`: `.gemini/commands/code-simplify.toml:8` references `GEMINI.md`, but `sources/addy/GEMINI.md` does not exist.
  - `missing-path`: `.gemini/commands/constraints.toml:24` references `GEMINI.md`, but `sources/addy/GEMINI.md` does not exist.
- `.claude/rules/skills-contributing.md` acts as an anti-duplication guardrail scoped to `skills/**` that directs contributors to `CONTRIBUTING.md` and `docs/skill-anatomy.md`.
- `.codex-plugin/plugin.json` specifies metadata and configuration for the OpenAI Codex plugin environment.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~4,878 tokens (19,511 bytes across 12 files).
Approximate output tokens: ~8,193 tokens (32,775 bytes across 16 deliverable cards).
