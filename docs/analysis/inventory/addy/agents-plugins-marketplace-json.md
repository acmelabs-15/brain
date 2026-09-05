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
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/plugins/marketplace.json

## Purpose — required, verbatim
> "Production-grade engineering skills covering every phase of software development: spec, plan, build, verify, review, and ship." — .agents/plugins/marketplace.json:10 (no explicit purpose statement)

## Design intent — required
Defines marketplace catalogue registration for the Antigravity / Gemini CLI plugin ecosystem, pointing to the local repository as an available productivity plugin package. Without it, the agent-skills pack cannot be discovered or installed as a native plugin in Antigravity harnesses.

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
`agent-skills` — .agents/plugins/marketplace.json:2, 8 — defined here
`spec` — .agents/plugins/marketplace.json:10 — used here
`plan` — .agents/plugins/marketplace.json:10 — used here
`build` — .agents/plugins/marketplace.json:10 — used here
`verify` — .agents/plugins/marketplace.json:10 — used here
`review` — .agents/plugins/marketplace.json:10 — used here
`ship` — .agents/plugins/marketplace.json:10 — used here

## Structure
JSON object:
- `name` — .agents/plugins/marketplace.json:2
- `interface` — .agents/plugins/marketplace.json:3
- `plugins` — .agents/plugins/marketplace.json:6

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures plugin distribution for Antigravity CLI via `.agents/plugins/marketplace.json` with local source path `"./"`.

## Context cost
535 bytes, approximately 120 tokens.
