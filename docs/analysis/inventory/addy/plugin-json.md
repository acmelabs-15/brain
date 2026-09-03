---
package: addy
path: plugin.json
type: config
bytes: 129
unit: inv-addy-7
---

# plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents." — plugin.json:4

## Design intent — required
Serves as the root-level plugin manifest for the Antigravity CLI (`agy`) ecosystem. Provides package metadata (`name`, `version`, `description`) required by `agy plugin install` and `agy plugin list` to discover, register, and validate the repository as a native Antigravity plugin without requiring path configuration or manual file linking.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- README.md:384
- scripts/validate-versions.js:9
- scripts/validate-versions-test.js:9
- docs/antigravity-setup.md:14, 25

## Concepts named — required, verbatim
- `agent-skills` — plugin.json:2 — defined here
- `version` — plugin.json:3 — defined here
- `description` — plugin.json:4 — defined here
- `Antigravity plugin manifest` — plugin.json:1 — defined here

## Structure
JSON object:
- `name` (line 2)
- `version` (line 3)
- `description` (line 4)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · plugin.json:1-5 vs docs/antigravity-setup.md:1-44 · `docs/antigravity-setup.md` describes Antigravity CLI plugin installation via `agy plugin install` but never explicitly mentions the file `plugin.json` by name, leaving `README.md:384` as the sole documentation file that explicitly identifies `plugin.json` as the "Antigravity plugin manifest".
- `doc-drift` · plugin.json:4 vs .claude-plugin/plugin.json:4 · The description in `plugin.json` ("Production-grade engineering skills for AI coding agents.") is truncated compared to `.claude-plugin/plugin.json:4` ("Production-grade engineering skills for AI coding agents — covering the full software development lifecycle from spec to ship.").

## Observations
- Multi-Manifest Architecture: Addy maintains three separate plugin manifests at different locations for different harnesses:
  1. `plugin.json` (repo root, 129 bytes) — Antigravity CLI plugin manifest
  2. `.claude-plugin/plugin.json` (.claude-plugin/, 463 bytes) — Claude Code plugin manifest (declares `commands` and `skills` directories)
  3. `.codex-plugin/plugin.json` (.codex-plugin/, 1,119 bytes) — Codex plugin manifest (declares `skills` directory, interface metadata, capabilities, prompts)
- Automated Version Parity: Addy uses `scripts/validate-versions.js` to ensure version parity (`0.6.8`) across all 5 manifests (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`) against `git describe --tags --abbrev=0`.
- Implicit Directory Resolution: Unlike `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json`, root `plugin.json` contains no explicit path pointers to `skills/`, `commands/`, or `agents/`, relying on Antigravity CLI default directory conventions.

## Context cost
- File size: 129 bytes (~32 tokens).
- Transitive context cost: ~32 tokens.
