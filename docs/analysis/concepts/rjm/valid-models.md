---
package: rjm
name: _VALID_MODELS
slug: valid-models
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _VALID_MODELS

## Definition — verbatim
(used, not defined)

> "_VALID_MODELS = frozenset({\"opus\", \"sonnet\", \"haiku\"})" — scripts/validation/agent_registry.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_registry.py | 70 | defined here | Constant frozenset defining allowable Claude model names for agent definitions. |

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
defects: orphan

## Design notes
`_VALID_MODELS` is a private constant frozenset in `scripts/validation/agent_registry.py` defining allowable Claude model names for agent definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
