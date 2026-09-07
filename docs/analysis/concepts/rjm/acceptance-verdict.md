---
package: rjm
name: acceptance_verdict
slug: acceptance-verdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# acceptance_verdict

## Definition — verbatim
(used, not defined)

> "def acceptance_verdict(body: str) -> str:" — scripts/quality_gate/spec_external_signal_gate.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/spec_external_signal_gate.py | 81 | defined here | Function evaluating PR body markdown to compute a deterministic PASS, FAIL, or UNKNOWN acceptance criteria verdict token. |

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
acceptance_verdict is a Python helper function identifier in spec_external_signal_gate.py computing acceptance criteria status tokens rather than an autonomous lifecycle concept.
