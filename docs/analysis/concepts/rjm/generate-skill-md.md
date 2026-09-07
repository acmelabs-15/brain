---
package: rjm
name: generate_skill_md
slug: generate-skill-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
