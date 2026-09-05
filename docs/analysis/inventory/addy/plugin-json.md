---
package: addy
path: plugin.json
type: config
bytes: 129
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: plugin.json, sha256: 4ee3a7f887b49cf84b2432af481c305c0fb2450209f32aeaab9f37429b65c9b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents." — plugin.json:4 (no explicit purpose statement)

## Design intent — required
Antigravity plugin manifest located at the repository root. Declares the package identity (`agent-skills`), version, and brief description for Antigravity-compatible runtime environments.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:384
- script scripts/validate-versions.js — scripts/validate-versions.js:9
- script scripts/validate-versions-test.js — scripts/validate-versions-test.js:9

## Concepts named — required, verbatim
- `agent-skills` — plugin.json:2 — defined here

## Structure
JSON object:
- `name` — plugin.json:2
- `version` — plugin.json:3
- `description` — plugin.json:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal root Antigravity plugin manifest. Contains only `name`, `version`, and `description`, relying on default convention discovery for skills and commands rather than explicit path mapping.

## Context cost
129 bytes, approximately 35 tokens.
