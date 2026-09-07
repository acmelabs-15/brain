---
package: rjm
name: AgentDefinition
slug: agentdefinition
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
