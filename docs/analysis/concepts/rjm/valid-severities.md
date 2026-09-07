---
package: rjm
name: VALID_SEVERITIES
slug: valid-severities
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# VALID_SEVERITIES

## Definition — verbatim
(used, not defined)

> "VALID_SEVERITIES = frozenset({\"critical\", \"high\", \"medium\", \"low\"})" — scripts/validate_quality_gate_output.py:43

## Also called — verbatim
`_VALID_SEVERITIES` — scripts/validation/pr_description.py:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_quality_gate_output.py | 43 | defined here | Constant frozenset defining acceptable severity strings for quality gate findings. |
| scripts/validation/pr_description.py | 28 | defined here | Constant frozenset defining valid issue severity labels for PR description validation. |

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
defects: orphan, script-bug, doc-drift

## Design notes
VALID_SEVERITIES is a constant set identifier defining valid finding and issue severity levels across validation scripts rather than an SDLC lifecycle concept.
