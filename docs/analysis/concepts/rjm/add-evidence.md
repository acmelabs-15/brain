---
package: rjm
name: add_evidence
slug: add-evidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# add_evidence

## Definition — verbatim
(used, not defined)

> "def add_evidence(policy: dict[str, Any], entry: dict[str, Any]) -> bool:" — scripts/skillbook.py:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 230 | defined here | Appends an evidence entry to a policy with idempotency checks on eval ID and triggers count recomputation. |

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
add_evidence is a Python function identifier mutating policy evidence arrays idempotently rather than an SDLC lifecycle concept, classified as name-only per D-023.
