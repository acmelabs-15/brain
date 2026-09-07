---
package: rjm
name: export_agents
slug: export-agents
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

# export_agents

## Definition — verbatim
(used, not defined)

> "def export_agents(agents: list[AgentDefinition]) -> ExportResult:" — scripts/openclaw_bridge.py:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 285 | defined here | Orchestration function that converts a list of AgentDefinition objects into an ExportResult containing AGENTS.md and skills. |

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
`export_agents` is a Python function identifier orchestrating agent definition conversion into OpenClaw workspace structures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
