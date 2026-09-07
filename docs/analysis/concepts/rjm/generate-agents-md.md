---
package: rjm
name: generate_agents_md
slug: generate-agents-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# generate_agents_md

## Definition — verbatim
(used, not defined)

> "def generate_agents_md(agents: list[AgentDefinition]) -> str:" — scripts/openclaw_bridge.py:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 206 | defined here | Function that renders a Markdown routing table and task routing rules for OpenClaw workspaces. |

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
`generate_agents_md` is a Python function identifier in `openclaw_bridge.py` generating an AGENTS.md routing file rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
