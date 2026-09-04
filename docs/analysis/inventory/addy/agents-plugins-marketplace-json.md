---
package: addy
path: .agents/plugins/marketplace.json
type: config
bytes: 535
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .agents/plugins/marketplace.json, sha256: d025ada6e7232eb14ff600679eb19005373a6925feb7b0b4764b28f702ba639f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/plugins/marketplace.json

## Purpose — required, verbatim
> "Production-grade engineering skills covering every phase of software development: spec, plan, build, verify, review, and ship." — .agents/plugins/marketplace.json:10

## Design intent — required
Defines marketplace catalog metadata registering `agent-skills` (v0.6.8) for local installation in Antigravity/Gemini agent harnesses, establishing display name, version, source location (`./`), installation availability (`AVAILABLE`), authentication policy (`ON_INSTALL`), and category (`Productivity`).

## Phase — required
none

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
- `agent-skills` — .agents/plugins/marketplace.json:2,8 — defined here
- `Agent Skills` — .agents/plugins/marketplace.json:4 — defined here
- `AVAILABLE` — .agents/plugins/marketplace.json:16 — used here
- `ON_INSTALL` — .agents/plugins/marketplace.json:17 — used here
- `Productivity` — .agents/plugins/marketplace.json:19 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Pinned version (0.6.8) is validated for synchronization with `.claude-plugin/marketplace.json` and other manifests via `scripts/validate-versions.js`.

## Context cost
535 bytes, ~135 tokens.
