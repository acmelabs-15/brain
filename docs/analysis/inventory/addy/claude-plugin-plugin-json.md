---
package: addy
path: .claude-plugin/plugin.json
type: config
bytes: 463
unit: inv-addy-11
---

# .claude-plugin/plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents — covering the full software development lifecycle from spec to ship." — .claude-plugin/plugin.json:4

## Design intent — required
Serves as the canonical Claude Code plugin manifest for `agent-skills`, establishing package identification (v0.6.8), author and repository coordinates, and mounting entry points for automatic tool discovery: skills located in `./skills` and commands located in both `./.claude/commands` and `./commands`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- directory ./.claude/commands — .claude-plugin/plugin.json:11
- directory ./commands — .claude-plugin/plugin.json:11
- directory ./skills — .claude-plugin/plugin.json:12

## Invoked by — required
- script scripts/validate-versions.js — scripts/validate-versions.js:11
- script scripts/validate-versions-test.js — scripts/validate-versions-test.js:11
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:123

## Concepts named — required, verbatim
- `agent-skills` — .claude-plugin/plugin.json:2 — defined here
- `spec` — .claude-plugin/plugin.json:4 — used here
- `ship` — .claude-plugin/plugin.json:4 — used here

## Structure
none (JSON configuration file)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · .claude-plugin/plugin.json:11 · Redundantly registers `./commands` (Antigravity TOML slash commands) alongside `./.claude/commands` (Claude Code markdown slash commands) under Claude plugin `"commands"` array.

## Observations
- Claude Code loads and exposes slash commands from both declared paths.
- Verified that all three target paths (`./.claude/commands`, `./commands`, `./skills`) exist in the repository root.
- Pinned version `0.6.8` is strictly validated by `scripts/validate-versions.js`.

## Context cost
463 bytes (~116 tokens).
