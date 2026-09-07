---
package: rjm
name: AgentDefinition
slug: agentdefinition
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
  - {path: scripts/validation/agent_registry.py, sha256: 1fc80c4c6f8e47f82c460cad6e02d91f2fe6766ffea24e7c70f9e5f5b7f07e1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AgentDefinition

## Definition — verbatim
(used, not defined)

> "class AgentDefinition:" — scripts/openclaw_bridge.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 79 | defined here | Dataclass representing parsed agent definition metadata and body content for workspace export. |
| scripts/validation/agent_registry.py | 74 | defined here | Dataclass representing parsed agent definitions validated from markdown frontmatter files. |

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
`AgentDefinition` is a Python dataclass identifier used across script utilities to hold parsed agent metadata rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
