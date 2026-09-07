---
package: rjm
name: generate_skill_md
slug: generate-skill-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# generate_skill_md

## Definition — verbatim
(used, not defined)

> "def generate_skill_md(agent: AgentDefinition) -> str:" — scripts/openclaw_bridge.py:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 249 | defined here | Function that converts a single AgentDefinition into an OpenClaw SKILL.md document. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
`generate_skill_md` is a Python function identifier creating OpenClaw SKILL.md stub content from agent definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
