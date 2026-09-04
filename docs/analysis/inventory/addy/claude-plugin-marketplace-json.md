---
package: addy
path: .claude-plugin/marketplace.json
type: config
bytes: 856
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 97c01ad91c69e1b4da5094ef37e0f0ef7c11f3c2a2ce6c5873229a0daf96acfe}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
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

## Concepts named — required, verbatim
- `addy-agent-skills` — .claude-plugin/marketplace.json:3 — defined here
- `agent-skills` — .claude-plugin/marketplace.json:11 — defined here
- `spec` — .claude-plugin/marketplace.json:4,17,20 — used here
- `plan` — .claude-plugin/marketplace.json:17 — used here
- `build` — .claude-plugin/marketplace.json:17 — used here
- `verify` — .claude-plugin/marketplace.json:17 — used here
- `review` — .claude-plugin/marketplace.json:17,20 — used here
- `ship` — .claude-plugin/marketplace.json:4,17,20 — used here
- `tdd` — .claude-plugin/marketplace.json:20 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Adheres to standard schema `https://json.schemastore.org/claude-code-marketplace.json`. Pinned version `0.6.8` is synchronized across all manifests via `scripts/validate-versions.js`. Distinct catalog container name (`addy-agent-skills`) separates the marketplace registry from the plugin package name (`agent-skills`).

## Context cost
856 bytes, ~214 tokens.
