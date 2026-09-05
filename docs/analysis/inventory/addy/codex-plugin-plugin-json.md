---
package: addy
path: .codex-plugin/plugin.json
type: config
bytes: 1119
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .codex-plugin/plugin.json, sha256: a4b79f3cae857be406a7a29b4f525a8b472c2c94505be0b8738b99c9a22dc09c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codex-plugin/plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents covering the full software development lifecycle from spec to ship." — .codex-plugin/plugin.json:4

## Design intent — required
Distribution manifest and plugin definition for OpenAI Codex and ChatGPT environments. It packages the skill catalog, defines metadata, capabilities, interface labels, and initial prompt starters for AI agents using the Codex plugin ecosystem.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Plugin declaration and capability configuration registered with the Codex agent platform.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Agent Skills` — .codex-plugin/plugin.json:14 — defined here
- `spec` — .codex-plugin/plugin.json:15 — used here
- `plan` — .codex-plugin/plugin.json:15 — used here
- `build` — .codex-plugin/plugin.json:15 — used here
- `test` — .codex-plugin/plugin.json:15 — used here
- `review` — .codex-plugin/plugin.json:15 — used here
- `ship` — .codex-plugin/plugin.json:15 — used here
- `Productivity` — .codex-plugin/plugin.json:18 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Accompanies `.claude-plugin/plugin.json` and `.agents/plugins/marketplace.json` to provide multi-platform plugin distribution. Mentions bundling 24 workflows across the lifecycle (.codex-plugin/plugin.json:16).

## Context cost
1119 bytes, ~280 tokens.
