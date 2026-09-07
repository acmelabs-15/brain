---
package: rjm
name: VALID_AGENTS
slug: valid-agents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# VALID_AGENTS

## Definition — verbatim
(used, not defined)

> "VALID_AGENTS = frozenset(" — scripts/validate_quality_gate_output.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_quality_gate_output.py | 28 | defined here | Constant frozenset defining allowed agent names for quality gate validation. |

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
defects: orphan, script-bug

## Design notes
VALID_AGENTS is a constant set identifier enumerating allowed agent names in scripts/validate_quality_gate_output.py rather than an SDLC lifecycle concept.
