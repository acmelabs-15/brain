---
package: rjm
name: TO_PROCESS
slug: to-process
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TO_PROCESS

## Definition — verbatim
(used, not defined)

> "If non-empty → TO_PROCESS" — scripts/incoherence.py:524

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 524 | defined here | Classification state identifying issues that contain user resolution text ready for reconciliation dispatch. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
An internal resolution parser classification state in `scripts/incoherence.py` indicating pending reconciliation work rather than an independent lifecycle concept.
