---
package: rjm
name: export_json
slug: export-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# export_json

## Definition — verbatim
(used, not defined)

> "def export_json(agents: list[AgentDefinition]) -> str:" — scripts/openclaw_bridge.py:345

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 345 | defined here | Function that serializes parsed agent definitions into a formatted JSON string. |

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
`export_json` is a Python function identifier serializing parsed agent definitions to JSON rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
