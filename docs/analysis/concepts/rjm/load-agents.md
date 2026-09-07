---
package: rjm
name: load_agents
slug: load-agents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_agents

## Definition — verbatim
(used, not defined)

> "def load_agents(agents_dir: Path) -> list[AgentDefinition]:" — scripts/openclaw_bridge.py:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 187 | defined here | Function that scans an agent directory for markdown files and parses them into a list of AgentDefinition objects. |

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
`load_agents` is a Python function identifier in `openclaw_bridge.py` iterating through a directory to load agent markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
