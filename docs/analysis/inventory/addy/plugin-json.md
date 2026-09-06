---
package: addy
path: plugin.json
type: config
bytes: 129
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: plugin.json, sha256: 4ee3a7f887b49cf84b2432af481c305c0fb2450209f32aeaab9f37429b65c9b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# plugin.json

## Purpose — required, verbatim
> "description": "Production-grade engineering skills for AI coding agents." — plugin.json:4

## Design intent — required
Defines top-level package metadata for the `agent-skills` repository, providing the canonical package identifier, semver version (0.6.8), and summary description for discovery and integration by plugin managers and catalog registries.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `name` — plugin.json:2 — defined here
- `agent-skills` — plugin.json:2 — defined here
- `version` — plugin.json:3 — defined here
- `description` — plugin.json:4 — defined here

## Structure
- name field — plugin.json:2
- version field — plugin.json:3
- description field — plugin.json:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifies version 0.6.8. Acts as the root configuration manifest for packaging and distributing the skills collection.

## Context cost
129 bytes, approximately 35 tokens.
