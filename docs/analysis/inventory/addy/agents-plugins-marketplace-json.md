---
package: addy
path: .agents/plugins/marketplace.json
type: agent
bytes: 535
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/plugins/marketplace.json, sha256: d025ada6e7232eb14ff600679eb19005373a6925feb7b0b4764b28f702ba639f}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/plugins/marketplace.json

## Purpose — required, verbatim
> "Production-grade engineering skills covering every phase of software development: spec, plan, build, verify, review, and ship." — .agents/plugins/marketplace.json:10

## Design intent — required
Declares the agent-skills package in the OpenAI Codex / Agent plugin marketplace format, pointing to the local repository root so that agent skills can be discovered, cataloged, and installed in supported agent harnesses.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `agent-skills` — .agents/plugins/marketplace.json:2 — defined here
- `spec` — .agents/plugins/marketplace.json:10 — used here
- `plan` — .agents/plugins/marketplace.json:10 — used here
- `build` — .agents/plugins/marketplace.json:10 — used here
- `verify` — .agents/plugins/marketplace.json:10 — used here
- `review` — .agents/plugins/marketplace.json:10 — used here
- `ship` — .agents/plugins/marketplace.json:10 — used here

## Structure
JSON document declaring top-level properties:
- `name`
- `interface`
- `plugins` (array containing plugin metadata: name, version, description, source, policy, category)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Line 10 lists lifecycle phases as "spec, plan, build, verify, review, and ship", naming "verify" whereas the command suite implements `test.md`.

## Context cost
535 bytes (~134 tokens). Isolated config file with no imports.
