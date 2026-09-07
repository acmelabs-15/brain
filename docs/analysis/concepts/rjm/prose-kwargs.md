---
package: rjm
name: _PROSE_KWARGS
slug: prose-kwargs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PROSE_KWARGS

## Definition — verbatim
(used, not defined)

> "_PROSE_KWARGS: frozenset[str] = frozenset(" — scripts/validation/check_skill_portability.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 115 | defined here | Constant frozenset of CLI argument parser keyword arguments exempt from path linting. |
| scripts/validation/check_vendor_portability.py | 135 | defined here | Constant frozenset of CLI argument parser keyword arguments exempt from path linting. |

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
A module-level constant identifier across portability validators, classified as name-only per D-023.
