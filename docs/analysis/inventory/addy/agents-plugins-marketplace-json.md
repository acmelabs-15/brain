---
package: addy
path: .agents/plugins/marketplace.json
type: config
bytes: 535
unit: inv-addy-4
---

# .agents/plugins/marketplace.json

## Purpose — required, verbatim
> "Production-grade engineering skills covering every phase of software development: spec, plan, build, verify, review, and ship." — .agents/plugins/marketplace.json:10

## Design intent — required
Defines marketplace catalog metadata registering `agent-skills` (v0.6.8) for local installation in Antigravity/Gemini agent harnesses, establishing display name, version, source location (`./`), installation availability (`AVAILABLE`), authentication policy (`ON_INSTALL`), and category (`Productivity`).

## Phase — required
`none`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- path ./ — .agents/plugins/marketplace.json:13

## Invoked by — required
- scripts/validate-versions.js:13
- docs/codex-setup.md:30

## Concepts named — required, verbatim
- `agent-skills` — .agents/plugins/marketplace.json:2, 8 — defined here
- `Agent Skills` — .agents/plugins/marketplace.json:4 — defined here
- `AVAILABLE` — .agents/plugins/marketplace.json:16 — used here
- `ON_INSTALL` — .agents/plugins/marketplace.json:17 — used here
- `Productivity` — .agents/plugins/marketplace.json:19 — used here

## Structure
none (JSON configuration file)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pinned version (0.6.8) is validated for synchronization with `.claude-plugin/marketplace.json` and other manifests via `scripts/validate-versions.js`.

## Context cost
- File size: 535 bytes (~135 tokens).
