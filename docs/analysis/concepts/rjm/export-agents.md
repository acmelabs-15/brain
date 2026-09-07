---
package: rjm
name: export_agents
slug: export-agents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
