---
package: rjm
name: _MODEL_MAP
slug: model-map
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MODEL_MAP

## Definition — verbatim
(used, not defined)

> "_MODEL_MAP: dict[str, str] = {" — scripts/openclaw_bridge.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 71 | defined here | Dictionary mapping shorthand ai-agents model names to OpenClaw provider model identifiers. |

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
`_MODEL_MAP` is a Python dictionary constant identifier mapping internal model aliases to provider IDs in `openclaw_bridge.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
