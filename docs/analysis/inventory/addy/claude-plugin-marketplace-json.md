---
package: addy
path: .claude-plugin/marketplace.json
type: config
bytes: 856
unit: inv-addy-11
---

# .claude-plugin/marketplace.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents — covering the full software development lifecycle from spec to ship." — .claude-plugin/marketplace.json:4

## Design intent — required
Defines marketplace catalog metadata registering `agent-skills` (v0.6.8) for Claude Code's plugin ecosystem, declaring the catalog container `addy-agent-skills`, owner metadata, repository source (`addyosmani/agent-skills`), license, homepage, and discovery keywords spanning the software engineering lifecycle.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script scripts/validate-versions.js — scripts/validate-versions.js:12
- script scripts/validate-versions-test.js — scripts/validate-versions-test.js:12
- doc README.md — README.md:76, 82

## Concepts named — required, verbatim
- `addy-agent-skills` — .claude-plugin/marketplace.json:3 — defined here
- `agent-skills` — .claude-plugin/marketplace.json:11 — defined here
- `spec` — .claude-plugin/marketplace.json:4, 17, 20 — used here
- `plan` — .claude-plugin/marketplace.json:17 — used here
- `build` — .claude-plugin/marketplace.json:17 — used here
- `verify` — .claude-plugin/marketplace.json:17 — used here
- `review` — .claude-plugin/marketplace.json:17, 20 — used here
- `ship` — .claude-plugin/marketplace.json:4, 17, 20 — used here
- `tdd` — .claude-plugin/marketplace.json:20 — used here

## Structure
none (JSON configuration file)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Adheres to standard schema `https://json.schemastore.org/claude-code-marketplace.json`.
- Pinned version `0.6.8` is synchronized across all manifests and release tags via `scripts/validate-versions.js`.
- Distinct catalog container name (`addy-agent-skills`) separates the marketplace registry from the plugin package name (`agent-skills`).

## Context cost
856 bytes (~214 tokens).
