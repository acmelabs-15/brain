---
package: rjm
name: promote_policy
slug: promote-policy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# promote_policy

## Definition — verbatim
(used, not defined)

> "def promote_policy(policy: dict[str, Any]) -> bool:" — scripts/skillbook.py:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 205 | defined here | Evaluates policy promotion while enforcing monotonic tier invariants and updating status. |

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
defects: doc-drift

## Design notes
promote_policy is a Python function identifier managing policy tier advancement rather than an SDLC lifecycle concept, classified as name-only per D-023.
